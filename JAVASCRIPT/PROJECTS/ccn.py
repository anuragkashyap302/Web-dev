import heapq
import math
import networkx as nx
import matplotlib.pyplot as plt
from matplotlib.patches import Patch
from matplotlib.lines import Line2D

class IPv4Fragmentation:
    def __init__(self):
        self.network = {}
        self.fragments = []
        self.visual_graph = nx.Graph()
        self.edge_colors = []
    
    def add_edge(self, node1, node2, cost):
        if node1 not in self.network:
            self.network[node1] = {}
        if node2 not in self.network:
            self.network[node2] = {}
        self.network[node1][node2] = cost
        self.network[node2][node1] = cost
        self.visual_graph.add_edge(node1, node2, weight=cost)
        self.edge_colors.append('gray')  # Default edge color
    
    def print_network_details(self):
        print("\n" + "="*50)
        print("NETWORK TOPOLOGY DETAILS")
        print("="*50)
        print("{:<10} {:<10} {:<10}".format("Node", "Neighbor", "Cost"))
        print("-"*30)
        for node in self.network:
            for neighbor, cost in self.network[node].items():
                print("{:<10} {:<10} {:<10}".format(node, neighbor, cost))
        print("="*50 + "\n")
    
    def dijkstra(self, start, end):
        if start not in self.network or end not in self.network:
            return None, float('inf')
        
        distances = {node: float('inf') for node in self.network}
        distances[start] = 0
        previous_nodes = {node: None for node in self.network}
        priority_queue = [(0, start)]
        
        while priority_queue:
            current_distance, current_node = heapq.heappop(priority_queue)
            
            if current_node == end:
                break
                
            if current_distance > distances[current_node]:
                continue
                
            for neighbor, weight in self.network[current_node].items():
                distance = current_distance + weight
                if distance < distances[neighbor]:
                    distances[neighbor] = distance
                    previous_nodes[neighbor] = current_node
                    heapq.heappush(priority_queue, (distance, neighbor))
        
        path = []
        current = end
        while previous_nodes[current] is not None:
            path.insert(0, current)
            current = previous_nodes[current]
        if path:
            path.insert(0, current)
        
        return path, distances[end] if end in distances else float('inf')
    
    def fragment_packet(self, payload, mtu):
        header_size = 20
        max_payload_per_packet = mtu - header_size
        max_payload_per_packet = (max_payload_per_packet // 8) * 8
        
        if max_payload_per_packet <= 0:
            raise ValueError("MTU too small for IPv4 header")
        
        if payload <= max_payload_per_packet:
            return [payload]
        
        fragments = []
        remaining_payload = payload
        offset = 0
        
        while remaining_payload > max_payload_per_packet:
            fragments.append(max_payload_per_packet)
            remaining_payload -= max_payload_per_packet
            offset += max_payload_per_packet
        
        if remaining_payload > 0:
            fragments.append(remaining_payload)
        
        return fragments
    
    def visualize_network(self, path=None, fragment_info=None):
        plt.figure(figsize=(12, 8))
        pos = nx.spring_layout(self.visual_graph, seed=42)  # Consistent layout
        
        # Set node colors based on their role
        node_colors = []
        for node in self.visual_graph.nodes():
            if path and node in path:
                if node == path[0]:
                    node_colors.append('#FF5733')  # Red for source
                elif node == path[-1]:
                    node_colors.append('#33FF57')  # Green for destination
                else:
                    node_colors.append('#339CFF')  # Blue for intermediate nodes
            else:
                node_colors.append('#CCCCCC')  # Gray for other nodes
        
        # Set edge colors and widths
        edge_colors = []
        edge_widths = []
        for u, v in self.visual_graph.edges():
            if path and ((u, v) in zip(path, path[1:]) or (v, u) in zip(path, path[1:])):
                edge_colors.append('#FF33E9')  # Purple for path edges
                edge_widths.append(3)
            else:
                edge_colors.append('#AAAAAA')  # Light gray for other edges
                edge_widths.append(1)
        
        # Draw the network
        nx.draw_networkx_nodes(
            self.visual_graph, pos, 
            node_size=800,
            node_color=node_colors,
            edgecolors='black',
            linewidths=1.5
        )
        
        nx.draw_networkx_labels(
            self.visual_graph, pos,
            font_size=12,
            font_weight='bold',
            font_color='black'
        )
        
        nx.draw_networkx_edges(
            self.visual_graph, pos,
            edge_color=edge_colors,
            width=edge_widths,
            alpha=0.8,
            arrows=True,
            arrowstyle='-|>',
            arrowsize=15
        )
        
        edge_labels = nx.get_edge_attributes(self.visual_graph, 'weight')
        nx.draw_networkx_edge_labels(
            self.visual_graph, pos,
            edge_labels=edge_labels,
            font_color='black',
            font_size=10,
            bbox=dict(alpha=0)
        )
        
        # Create legend
        legend_elements = [
            Patch(facecolor='#FF5733', edgecolor='black', label='Source Node'),
            Patch(facecolor='#33FF57', edgecolor='black', label='Destination Node'),
            Patch(facecolor='#339CFF', edgecolor='black', label='Path Node'),
            Patch(facecolor='#CCCCCC', edgecolor='black', label='Other Node'),
            Line2D([0], [0], color='#FF33E9', lw=3, label='Path Edge'),
            Line2D([0], [0], color='#AAAAAA', lw=1, label='Other Edge')
        ]
        
        plt.legend(
            handles=legend_elements,
            loc='upper right',
            bbox_to_anchor=(1.15, 1),
            fontsize=10
        )
        
        # Add title and fragment info if available
        title = "Network Topology with Shortest Path"
        if fragment_info:
            title += f"\nFragment {fragment_info['num']} ({fragment_info['size']} bytes)"
            plt.figtext(
                0.5, 0.01,
                f"Path: {' → '.join(path)} | Total Cost: {fragment_info['cost']}",
                ha="center",
                fontsize=11,
                bbox={"facecolor":"orange", "alpha":0.5, "pad":5}
            )
        
        plt.title(title, fontsize=14, fontweight='bold', pad=20)
        plt.axis('off')
        plt.tight_layout()
        plt.show()
    
    def send_fragments(self, src, dest, payload, mtu):
        fragments = self.fragment_packet(payload, mtu)
        
        # Print network details
        self.print_network_details()
        
        print("\n" + "="*50)
        print("FRAGMENTATION DETAILS")
        print("="*50)
        print(f"Source: {src}")
        print(f"Destination: {dest}")
        print(f"Payload: {payload} bytes")
        print(f"MTU: {mtu} bytes")
        print(f"Header size: 20 bytes")
        print(f"Max payload per fragment: {mtu - 20} bytes")
        print(f"Number of fragments: {len(fragments)}")
        print("="*50 + "\n")
        
        # Visualize the initial network
        print("\nVisualizing initial network topology...")
        self.visualize_network()
        
        for i, frag_size in enumerate(fragments, 1):
            path, distance = self.dijkstra(src, dest)
            if not path:
                print(f"\nFragment {i} ({frag_size} bytes): No path exists!")
                continue
            
            print("\n" + "-"*50)
            print(f"FRAGMENT {i} DETAILS")
            print("-"*50)
            print(f"Size: {frag_size} bytes")
            print(f"Path: {' → '.join(path)}")
            print(f"Total cost: {distance}")
            print("-"*50)
            
            # Visualize this fragment's path
            self.visualize_network(
                path,
                fragment_info={
                    'num': i,
                    'size': frag_size,
                    'cost': distance
                }
            )

def main():
    # ASCII art header
    print(r"""
   _____ _____  ___  ______ _____ _____ _   _ ___________ 
  |_   _|  _  ||  \/  || ___ \_   _|_   _| \ | |  ___| ___ \
    | | | | | || .  . || |_/ / | |   | | |  \| | |__ | |_/ /
    | | | | | || |\/| ||  __/  | |   | | | . ` |  __||    / 
   _| |_\ \_/ /| |  | || |    _| |_  | | | |\  | |___| |\ \ 
   \___/ \___/ \_|  |_/\_|    \___/  \_/ \_| \_\____/\_| \_|
    """)
    print("IPv4 Fragmentation with Dijkstra's Shortest Path Routing")
    print("="*70 + "\n")
    
    frag_system = IPv4Fragmentation()
    
    # Input network topology
    print("\n" + "="*50)
    print("NETWORK TOPOLOGY SETUP")
    print("="*50)
    print("Enter edges in format: node1 node2 cost")
    print("Example: A B 12")
    print("Type 'done' when finished\n")
    
    while True:
        edge = input("Enter edge: ")
        if edge.lower() == 'done':
            break
        try:
            node1, node2, cost = edge.split()
            cost = int(cost)
            frag_system.add_edge(node1, node2, cost)
            print(f"Added edge: {node1} --{cost}-- {node2}")
        except:
            print("Invalid input. Please try again.")
    
    # Input fragmentation parameters
    print("\n" + "="*50)
    print("FRAGMENTATION PARAMETERS")
    print("="*50)
    while True:
        try:
            payload = int(input("\nEnter payload size in bytes: "))
            mtu = int(input("Enter MTU in bytes: "))
            if payload <= 0 or mtu <= 0:
                print("Values must be positive. Try again.")
                continue
            break
        except:
            print("Invalid input. Please enter integers.")
    
    # Input source and destination
    print("\n" + "="*50)
    print("ROUTING PARAMETERS")
    print("="*50)
    while True:
        src = input("\nEnter source node: ").upper()
        dest = input("Enter destination node: ").upper()
        if src in frag_system.network and dest in frag_system.network:
            break
        print("One or both nodes not in network. Try again.")
    
    # Send fragments with visualization
    print("\nStarting fragmentation and routing simulation...")
    frag_system.send_fragments(src, dest, payload, mtu)
    
    # Footer
    print("\n" + "="*50)
    print("SIMULATION COMPLETE")
    print("="*50)

if __name__ == "__main__":
    main()