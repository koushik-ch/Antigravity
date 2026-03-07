// Combined Google L4 & Topicwise List
// Automatically smartly integrated Topicwise problems into respective L4 categories
const COMBINED_DATA = [
    {
        id: 'two-pointer', title: 'Two Pointer Patterns', number: 'I', icon: '👆',
        patterns: [
            {
                num: 1, name: 'Converging', tier: 'must', freq: 'high', problems: [
                    { t: '1. Two Sum', d: 'E' }, { t: '11. Container With Most Water', d: 'M' }, { t: '15. 3Sum', d: 'M' }, { t: '16. 3Sum Closest', d: 'M' }, { t: '18. 4Sum', d: 'M' }, { t: '42. Trapping Rain Water', d: 'H' }, { t: '167. Two Sum II - Input Array Is Sorted', d: 'M' }, { t: '881. Boats to Save People', d: 'M' }, { t: '977. Squares of a Sorted Array', d: 'E' }
                ]
            },
            {
                num: 2, name: 'Fast & Slow', tier: 'must', freq: 'high', problems: [
                    { t: '141. Linked List Cycle', d: 'E' }, { t: '142. Linked List Cycle II', d: 'M' }, { t: '202. Happy Number', d: 'E' }, { t: '287. Find the Duplicate Number', d: 'M' }, { t: '392. Is Subsequence', d: 'E' }
                ]
            },
            {
                num: 3, name: 'Fixed Separation', tier: 'important', freq: 'medium', problems: [
                    { t: '19. Remove Nth Node From End of List', d: 'M' }, { t: '876. Middle of the Linked List', d: 'E' }, { t: '2095. Delete the Middle Node of a Linked List', d: 'M' }
                ]
            },
            {
                num: 4, name: 'In-place Array Modification', tier: 'important', freq: 'medium', problems: [
                    { t: '26. Remove Duplicates from Sorted Array', d: 'E' }, { t: '27. Remove Element', d: 'E' }, { t: '75. Sort Colors', d: 'M' }, { t: '80. Remove Duplicates from Sorted Array II', d: 'M' }, { t: '283. Move Zeroes', d: 'E' }, { t: '443. String Compression', d: 'M' }, { t: '905. Sort Array By Parity', d: 'E' }, { t: '2337. Move Pieces to Obtain a String', d: 'M' }
                ]
            },
            {
                num: 5, name: 'String Comparison', tier: 'good', freq: 'low', problems: [
                    { t: '844. Backspace String Compare', d: 'E' }, { t: '922. Sort Array By Parity II', d: 'E' }
                ]
            },
            {
                num: 6, name: 'Expanding From Center', tier: 'must', freq: 'high', problems: [
                    { t: '5. Longest Palindromic Substring', d: 'M' }, { t: '647. Palindromic Substrings', d: 'M' }
                ]
            },
            {
                num: 7, name: 'String Reversal', tier: 'good', freq: 'low', problems: [
                    { t: '151. Reverse Words in a String', d: 'M' }, { t: '344. Reverse String', d: 'E' }, { t: '345. Reverse Vowels of a String', d: 'E' }, { t: '541. Reverse String II', d: 'E' }
                ]
            }
            ,
            { "num": 992, "name": "Topicwise Extras", "tier": "topicwise", "freq": "medium", "problems": [{ "t": "Move Zeros", "d": "E" }, { "t": "Rearrange Array Elements by Sign", "d": "M" }, { "t": "The Latest Time to Catch a Bus", "d": "M" }, { "t": "Sum of Square Numbers  (Revisit)", "d": "M" }, { "t": "Append Characters to String to Make Subsequence", "d": "M" }, { "t": "Grumpy Bookstore Owner", "d": "M" }, { "t": "Maximum Score of a Good Subarray  (Revisit)", "d": "H" }] }]
    },
    {
        id: 'sliding-window', title: 'Sliding Window Patterns', number: 'II', icon: '🪟',
        patterns: [
            {
                num: 8, name: 'Fixed Size', tier: 'must', freq: 'high', problems: [
                    { t: '346. Moving Average from Data Stream', d: 'E' }, { t: '643. Maximum Average Subarray I', d: 'E' }, { t: '560. Subarray Sum Equals K', d: 'M' }, { t: '523. Continuous Subarray Sum', d: 'M' }, { t: '974. Subarray Sums Divisible by K', d: 'M' }
                ]
            },
            {
                num: 9, name: 'Variable Size', tier: 'must', freq: 'high', problems: [
                    { t: '3. Longest Substring Without Repeating Characters', d: 'M' }, { t: '76. Minimum Window Substring', d: 'H' }, { t: '209. Minimum Size Subarray Sum', d: 'M' }, { t: '219. Contains Duplicate II', d: 'E' }, { t: '424. Longest Repeating Character Replacement', d: 'M' }, { t: '713. Subarray Product Less Than K', d: 'M' }, { t: '904. Fruit Into Baskets', d: 'M' }, { t: '1004. Max Consecutive Ones III', d: 'M' }, { t: '1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit', d: 'M' }, { t: '1493. Longest Subarray of 1\'s After Deleting One Element', d: 'M' }, { t: '1658. Minimum Operations to Reduce X to Zero', d: 'M' }, { t: '1838. Frequency of the Most Frequent Element', d: 'M' }, { t: '2461. Maximum Sum of Distinct Subarrays With Length K', d: 'M' }, { t: '2516. Take K of Each Character From Left and Right', d: 'M' }, { t: '2762. Continuous Subarrays', d: 'M' }, { t: '2779. Maximum Beauty of an Array After Applying Operation', d: 'M' }
                ]
            },
            {
                num: 10, name: 'Monotonic Queue for Max/Min', tier: 'must', freq: 'high', problems: [
                    { t: '239. Sliding Window Maximum', d: 'H' }, { t: '862. Shortest Subarray with Sum at Least K', d: 'H' }, { t: '1696. Jump Game VI', d: 'M' }
                ]
            },
            {
                num: 11, name: 'Character Frequency Matching', tier: 'important', freq: 'medium', problems: [
                    { t: '438. Find All Anagrams in a String', d: 'M' }, { t: '567. Permutation in String', d: 'M' }, { t: '30. Substring with Concatenation of All Words', d: 'H' }
                ]
            }
            ,
            { "num": 999, "name": "Topicwise Extras", "tier": "topicwise", "freq": "medium", "problems": [{ "t": "Three Consecutive Odds", "d": "E" }, { "t": "Alternating Groups I", "d": "E" }, { "t": "Count Number of Nice Subarrays", "d": "M" }, { "t": "Number of Substrings Containing All Three Characters", "d": "M" }, { "t": "Maximum Points You Can Obtain from cards", "d": "M" }, { "t": "Get Equal Substrings Within Budget", "d": "M" }, { "t": "Alternating Groups II", "d": "M" }, { "t": "Minimum Operations to Make Binary Array Elements Equal to One I", "d": "M" }, { "t": "Minimum Swaps to Group All 1's Together II  (Revisit)", "d": "M" }, { "t": "Maximum Sum of Two Non-Overlapping Subarrays  (Revisit)", "d": "M" }, { "t": "Subarrays with K Different Integers", "d": "H" }, { "t": "Maximum Sum of 3 Non-Overlapping Subarrays  (Revisit)", "d": "H" }] }]
    },
    {
        id: 'tree-traversal', title: 'Tree Traversal Patterns (DFS & BFS)', number: 'III', icon: '🌳',
        patterns: [
            {
                num: 12, name: 'Level Order Traversal', tier: 'must', freq: 'high', problems: [
                    { t: '102. Binary Tree Level Order Traversal', d: 'M' }, { t: '103. Binary Tree Zigzag Level Order Traversal', d: 'M' }, { t: '199. Binary Tree Right Side View', d: 'M' }, { t: '515. Find Largest Value in Each Tree Row', d: 'M' }, { t: '1161. Maximum Level Sum of a Binary Tree', d: 'M' }
                ]
            },
            {
                num: 13, name: 'Recursive Preorder Traversal', tier: 'must', freq: 'high', problems: [
                    { t: '100. Same Tree', d: 'E' }, { t: '101. Symmetric Tree', d: 'E' }, { t: '105. Construct Binary Tree from Preorder and Inorder Traversal', d: 'M' }, { t: '114. Flatten Binary Tree to Linked List', d: 'M' }, { t: '226. Invert Binary Tree', d: 'E' }, { t: '257. Binary Tree Paths', d: 'E' }, { t: '988. Smallest String Starting From Leaf', d: 'M' }
                ]
            },
            {
                num: 14, name: 'Recursive Inorder Traversal', tier: 'must', freq: 'high', problems: [
                    { t: '94. Binary Tree Inorder Traversal', d: 'E' }, { t: '98. Validate Binary Search Tree', d: 'M' }, { t: '173. Binary Search Tree Iterator', d: 'M' }, { t: '230. Kth Smallest Element in a BST', d: 'M' }, { t: '501. Find Mode in Binary Search Tree', d: 'E' }, { t: '530. Minimum Absolute Difference in BST', d: 'E' }
                ]
            },
            {
                num: 15, name: 'Recursive Postorder Traversal', tier: 'must', freq: 'high', problems: [
                    { t: '104. Maximum Depth of Binary Tree', d: 'E' }, { t: '110. Balanced Binary Tree', d: 'E' }, { t: '124. Binary Tree Maximum Path Sum', d: 'H' }, { t: '145. Binary Tree Postorder Traversal', d: 'E' }, { t: '337. House Robber III', d: 'M' }, { t: '366. Find Leaves of Binary Tree', d: 'M' }, { t: '543. Diameter of Binary Tree', d: 'E' }, { t: '863. All Nodes Distance K in Binary Tree', d: 'M' }, { t: '1110. Delete Nodes And Return Forest', d: 'M' }, { t: '2458. Height of Binary Tree After Subtree Removal Queries', d: 'H' }
                ]
            },
            {
                num: 16, name: 'Lowest Common Ancestor', tier: 'must', freq: 'high', problems: [
                    { t: '235. Lowest Common Ancestor of a Binary Search Tree', d: 'M' }, { t: '236. Lowest Common Ancestor of a Binary Tree', d: 'M' }
                ]
            },
            {
                num: 17, name: 'Serialization and Deserialization', tier: 'must', freq: 'high', problems: [
                    { t: '297. Serialize and Deserialize Binary Tree', d: 'H' }, { t: '572. Subtree of Another Tree', d: 'E' }, { t: '652. Find Duplicate Subtrees', d: 'M' }
                ]
            }
        ]
    },
    {
        id: 'graph-traversal', title: 'Graph Traversal Patterns (DFS & BFS)', number: 'IV', icon: '🕸️',
        patterns: [
            {
                num: 18, name: 'DFS - Connected Components / Island Counting', tier: 'must', freq: 'high', problems: [
                    { t: '130. Surrounded Regions', d: 'M' }, { t: '200. Number of Islands', d: 'M' }, { t: '417. Pacific Atlantic Water Flow', d: 'M' }, { t: '547. Number of Provinces', d: 'M' }, { t: '695. Max Area of Island', d: 'M' }, { t: '733. Flood Fill', d: 'E' }, { t: '841. Keys and Rooms', d: 'M' }, { t: '1020. Number of Enclaves', d: 'M' }, { t: '1254. Number of Closed Islands', d: 'M' }, { t: '329. Longest Increasing Path in a Matrix', d: 'H' }, { t: '399. Evaluate Division', d: 'M' }
                ]
            },
            {
                num: 19, name: 'BFS - Connected Components / Island Counting', tier: 'must', freq: 'high', problems: [
                    { t: '542. 01 Matrix', d: 'M' }, { t: '994. Rotting Oranges', d: 'M' }, { t: '1091. Shortest Path in Binary Matrix', d: 'M' }, { t: '286. Walls and Gates', d: 'M' }
                ]
            },
            {
                num: 20, name: 'DFS - Cycle Detection', tier: 'must', freq: 'high', problems: [
                    { t: '207. Course Schedule', d: 'M' }, { t: '210. Course Schedule II', d: 'M' }, { t: '802. Find Eventual Safe States', d: 'M' }, { t: '1059. All Paths from Source Lead to Destination', d: 'M' }
                ]
            },
            {
                num: 21, name: 'BFS - Topological Sort (Kahn\'s Algorithm)', tier: 'must', freq: 'high', problems: [
                    { t: '210. Course Schedule II', d: 'M' }, { t: '269. Alien Dictionary', d: 'H' }, { t: '310. Minimum Height Trees', d: 'M' }, { t: '444. Sequence Reconstruction', d: 'M' }, { t: '1136. Parallel Courses', d: 'M' }, { t: '1857. Largest Color Value in a Directed Graph', d: 'H' }, { t: '2050. Parallel Courses III', d: 'H' }, { t: '2115. Find All Possible Recipes from Given Supplies', d: 'M' }, { t: '2392. Build a Matrix With Conditions', d: 'H' }
                ]
            },
            {
                num: 22, name: 'Deep Copy / Cloning', tier: 'important', freq: 'medium', problems: [
                    { t: '133. Clone Graph', d: 'M' }, { t: '138. Copy List with Random Pointer', d: 'M' }, { t: '332. Reconstruct Itinerary', d: 'H' }, { t: '1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance', d: 'M' }
                ]
            },
            {
                num: 23, name: 'Shortest Path (Dijkstra / 0-1 BFS)', tier: 'must', freq: 'high', problems: [
                    { t: '743. Network Delay Time', d: 'M' }, { t: '778. Swim in Rising Water', d: 'H' }, { t: '1514. Path with Maximum Probability', d: 'M' }, { t: '1631. Path With Minimum Effort', d: 'M' }, { t: '1976. Number of Ways to Arrive at Destination', d: 'M' }, { t: '2045. Second Minimum Time to Reach Destination', d: 'H' }, { t: '2290. Minimum Obstacle Removal to Reach Corner', d: 'H' }, { t: '2577. Minimum Time to Visit a Cell In a Grid', d: 'H' }, { t: '2812. Find the Safest Path in a Grid', d: 'M' }, { t: '505. The Maze II', d: 'M' }
                ]
            },
            {
                num: 24, name: 'Shortest Path (Bellman-Ford / BFS+K)', tier: 'must', freq: 'high', problems: [
                    { t: '787. Cheapest Flights Within K Stops', d: 'M' }, { t: '1129. Shortest Path with Alternating Colors', d: 'M' }
                ]
            },
            {
                num: 25, name: 'Union-Find', tier: 'must', freq: 'high', problems: [
                    { t: '200. Number of Islands', d: 'M' }, { t: '261. Graph Valid Tree', d: 'M' }, { t: '305. Number of Islands II', d: 'H' }, { t: '323. Number of Connected Components in an Undirected Graph', d: 'M' }, { t: '547. Number of Provinces', d: 'M' }, { t: '684. Redundant Connection', d: 'M' }, { t: '721. Accounts Merge', d: 'M' }, { t: '737. Sentence Similarity II', d: 'M' }, { t: '947. Most Stones Removed with Same Row or Column', d: 'M' }, { t: '952. Largest Component Size by Common Factor', d: 'H' }, { t: '959. Regions Cut By Slashes', d: 'M' }, { t: '1101. The Earliest Moment When Everyone Become Friends', d: 'M' }
                ]
            },
            {
                num: 26, name: 'Strongly Connected Components (Kosaraju / Tarjan)', tier: 'important', freq: 'medium', problems: [
                    { t: '210. Course Schedule II', d: 'M' }, { t: '547. Number of Provinces', d: 'M' }, { t: '1192. Critical Connections in a Network', d: 'H' }, { t: '2127. Maximum Employees to Be Invited to a Meeting', d: 'H' }
                ]
            },
            {
                num: 27, name: 'Bridges & Articulation Points (Tarjan low-link)', tier: 'important', freq: 'medium', problems: [
                    { t: '1192. Critical Connections in a Network', d: 'H' }, { t: '2360. Longest Cycle in a Graph', d: 'H' }
                ]
            },
            {
                num: 28, name: 'Minimum Spanning Tree (Kruskal / Prim / DSU + heap)', tier: 'important', freq: 'medium', problems: [
                    { t: '1135. Connecting Cities With Minimum Cost', d: 'M' }, { t: '1584. Min Cost to Connect All Points', d: 'M' }, { t: '1168. Optimize Water Distribution in a Village', d: 'H' }, { t: '1489. Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree', d: 'H' }
                ]
            },
            {
                num: 29, name: 'Bidirectional BFS', tier: 'important', freq: 'medium', problems: [
                    { t: '127. Word Ladder', d: 'H' }, { t: '126. Word Ladder II', d: 'H' }, { t: '815. Bus Routes', d: 'H' }
                ]
            }
        ]
    },
    {
        id: 'dynamic-programming', title: 'Dynamic Programming (DP) Patterns', number: 'V', icon: '🧮',
        patterns: [
            {
                num: 30, name: 'Fibonacci Style', tier: 'must', freq: 'high', problems: [
                    { t: '70. Climbing Stairs', d: 'E' }, { t: '91. Decode Ways', d: 'M' }, { t: '198. House Robber', d: 'M' }, { t: '213. House Robber II', d: 'M' }, { t: '337. House Robber III', d: 'M' }, { t: '509. Fibonacci Number', d: 'E' }, { t: '740. Delete and Earn', d: 'M' }, { t: '746. Min Cost Climbing Stairs', d: 'E' }
                ]
            },
            {
                num: 31, name: 'Kadane\'s Algorithm for Max/Min Subarray', tier: 'must', freq: 'high', problems: [
                    { t: '53. Maximum Subarray', d: 'M' }, { t: '152. Maximum Product Subarray', d: 'M' }, { t: '918. Maximum Sum Circular Subarray', d: 'M' }, { t: '1749. Maximum Absolute Sum of Any Subarray', d: 'M' }, { t: '2321. Maximum Score Of Spliced Array', d: 'H' }
                ]
            },
            {
                num: 32, name: 'Coin Change / Unbounded Knapsack Style', tier: 'must', freq: 'high', problems: [
                    { t: '322. Coin Change', d: 'M' }, { t: '377. Combination Sum IV', d: 'M' }, { t: '518. Coin Change II', d: 'M' }
                ]
            },
            {
                num: 33, name: '0/1 Knapsack, Subset Sum Style', tier: 'must', freq: 'high', problems: [
                    { t: '416. Partition Equal Subset Sum', d: 'M' }, { t: '494. Target Sum', d: 'M' }
                ]
            },
            {
                num: 34, name: 'Word Break Style', tier: 'must', freq: 'high', problems: [
                    { t: '139. Word Break', d: 'M' }, { t: '140. Word Break II', d: 'H' }
                ]
            },
            {
                num: 35, name: 'Longest Common Subsequence - LCS', tier: 'must', freq: 'high', problems: [
                    { t: '1143. Longest Common Subsequence', d: 'M' }, { t: '1092. Shortest Common Supersequence', d: 'H' }, { t: '1312. Minimum Insertion Steps to Make a String Palindrome', d: 'H' }
                ]
            },
            {
                num: 36, name: 'Edit Distance / Levenshtein Distance', tier: 'must', freq: 'high', problems: [
                    { t: '72. Edit Distance', d: 'M' }, { t: '583. Delete Operation for Two Strings', d: 'M' }, { t: '712. Minimum ASCII Delete Sum for Two Strings', d: 'M' }
                ]
            },
            {
                num: 37, name: 'Unique Paths on Grid', tier: 'must', freq: 'high', problems: [
                    { t: '62. Unique Paths', d: 'M' }, { t: '63. Unique Paths II', d: 'M' }, { t: '64. Minimum Path Sum', d: 'M' }, { t: '120. Triangle', d: 'M' }, { t: '221. Maximal Square', d: 'M' }, { t: '931. Minimum Falling Path Sum', d: 'M' }, { t: '1277. Count Square Submatrices with All Ones', d: 'M' }
                ]
            },
            {
                num: 38, name: 'Interval DP', tier: 'important', freq: 'medium', problems: [
                    { t: '312. Burst Balloons', d: 'H' }, { t: '546. Remove Boxes', d: 'H' }, { t: '1039. Minimum Score Triangulation of Polygon', d: 'M' }
                ]
            },
            {
                num: 39, name: 'Catalan Numbers', tier: 'important', freq: 'medium', problems: [
                    { t: '95. Unique Binary Search Trees II', d: 'M' }, { t: '96. Unique Binary Search Trees', d: 'M' }, { t: '241. Different Ways to Add Parentheses', d: 'M' }
                ]
            },
            {
                num: 40, name: 'Longest Increasing Subsequence', tier: 'must', freq: 'high', problems: [
                    { t: '300. Longest Increasing Subsequence', d: 'M' }, { t: '354. Russian Doll Envelopes', d: 'H' }, { t: '1671. Minimum Number of Removals to Make Mountain Array', d: 'H' }, { t: '673. Number of Longest Increasing Subsequence', d: 'M' }
                ]
            },
            {
                num: 41, name: 'Stock Problems', tier: 'must', freq: 'high', problems: [
                    { t: '121. Best Time to Buy and Sell Stock', d: 'E' }, { t: '122. Best Time to Buy and Sell Stock II', d: 'M' }, { t: '123. Best Time to Buy and Sell Stock III', d: 'H' }, { t: '188. Best Time to Buy and Sell Stock IV', d: 'H' }, { t: '309. Best Time to Buy and Sell Stock with Cooldown', d: 'M' }
                ]
            },
            {
                "num": 1003,
                "name": "Topicwise Extras",
                "tier": "topicwise",
                "freq": "medium",
                "problems": [
                    {
                        "t": "Interleaving String",
                        "d": "M"
                    },
                    {
                        "t": "Perfect Squares",
                        "d": "M"
                    },
                    {
                        "t": "Largest Divisible Subset (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "Guess Number Higher or Lower II (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "Ones and Zeroes",
                        "d": "M"
                    },
                    {
                        "t": "Best Time to Buy and Sell Stock with Transaction fee",
                        "d": "M"
                    },
                    {
                        "t": "Minimum Cost For Tickets (Revisit and code)",
                        "d": "M"
                    },
                    {
                        "t": "Longest Arithmetic Subsequence (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "Partition Array for Maximum Sum",
                        "d": "M"
                    },
                    {
                        "t": "Longest String Chain (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "Minimum Cost Tree From Leaf Values",
                        "d": "M"
                    },
                    {
                        "t": "Number of Dice Rolls With Target Sum",
                        "d": "M"
                    },
                    {
                        "t": "Longest Arithmetic Subsequence of Given Difference (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "Minimum Sideway Jumps (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "Check if There is a Valid Partition For The Array",
                        "d": "M"
                    },
                    {
                        "t": "Maximize Total Cost of Alternating Subarrays",
                        "d": "M"
                    },
                    {
                        "t": "Path with Maximum Gold",
                        "d": "M"
                    },
                    {
                        "t": "Filling Bookcase Shelves  (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "Find the Maximum Length of Valid Subsequence II  (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "Regular Expression Matching (Revisit)",
                        "d": "H"
                    },
                    {
                        "t": "Wildcard Matching",
                        "d": "H"
                    },
                    {
                        "t": "Distinct Subsequences",
                        "d": "H"
                    },
                    {
                        "t": "Frog Jump (Revisit)",
                        "d": "H"
                    },
                    {
                        "t": "Minimum Swaps To Make Sequences Increasing",
                        "d": "H"
                    },
                    {
                        "t": "Super Egg Drop",
                        "d": "H"
                    },
                    {
                        "t": "Pizza With 3n Slices (Revisit)",
                        "d": "H"
                    },
                    {
                        "t": "Reducing Dishes",
                        "d": "H"
                    },
                    {
                        "t": "Cherry Pickup II",
                        "d": "H"
                    },
                    {
                        "t": "Minimum Cost to Cut a Stick",
                        "d": "H"
                    },
                    {
                        "t": "Maximum Height by Stacking Cuboids (Revisit)",
                        "d": "H"
                    },
                    {
                        "t": "Student Attendance Record II",
                        "d": "H"
                    },
                    {
                        "t": "Freedom Trail",
                        "d": "H"
                    },
                    {
                        "t": "1240. Tiling a Rectangle with the Fewest Squares (Revisit)",
                        "d": "H"
                    },
                    {
                        "t": "Count the Number of Inversions (Revisit)",
                        "d": "H"
                    }
                ]
            }
        ]
    },
    {
        id: 'heap', title: 'Heap (Priority Queue) Patterns', number: 'VI', icon: '⛰️',
        patterns: [
            {
                num: 42, name: 'Top K Elements', tier: 'must', freq: 'high', problems: [
                    { t: '215. Kth Largest Element in an Array', d: 'M' }, { t: '347. Top K Frequent Elements', d: 'M' }, { t: '451. Sort Characters By Frequency', d: 'M' }, { t: '692. Top K Frequent Words', d: 'M' }, { t: '703. Kth Largest Element in a Stream', d: 'E' }, { t: '973. K Closest Points to Origin', d: 'M' }, { t: '1046. Last Stone Weight', d: 'E' }, { t: '1337. The K Weakest Rows in a Matrix', d: 'E' }
                ]
            },
            {
                num: 43, name: 'Two Heaps for Median Finding', tier: 'must', freq: 'high', problems: [
                    { t: '295. Find Median from Data Stream', d: 'H' }, { t: '480. Sliding Window Median', d: 'H' }, { t: '1825. Finding MK Average', d: 'H' }
                ]
            },
            {
                num: 44, name: 'K-way Merge', tier: 'must', freq: 'high', problems: [
                    { t: '23. Merge k Sorted Lists', d: 'H' }, { t: '373. Find K Pairs with Smallest Sums', d: 'M' }, { t: '378. Kth Smallest Element in a Sorted Matrix', d: 'M' }, { t: '632. Smallest Range Covering Elements from K Lists', d: 'H' }
                ]
            },
            {
                num: 45, name: 'Scheduling / Minimum Cost', tier: 'must', freq: 'high', problems: [
                    { t: '253. Meeting Rooms II', d: 'M' }, { t: '767. Reorganize String', d: 'M' }, { t: '857. Minimum Cost to Hire K Workers', d: 'H' }, { t: '1642. Furthest Building You Can Reach', d: 'M' }, { t: '1792. Maximum Average Pass Ratio', d: 'M' }, { t: '1834. Single-Threaded CPU', d: 'M' }, { t: '1942. The Number of the Smallest Unoccupied Chair', d: 'M' }, { t: '2402. Meeting Rooms III', d: 'H' }
                ]
            }
        ]
    },
    {
        id: 'backtracking', title: 'Backtracking Patterns', number: 'VII', icon: '🔙',
        patterns: [
            {
                num: 46, name: 'Subsets (Include/Exclude)', tier: 'must', freq: 'high', problems: [
                    { t: '17. Letter Combinations of a Phone Number', d: 'M' }, { t: '77. Combinations', d: 'M' }, { t: '78. Subsets', d: 'M' }, { t: '90. Subsets II', d: 'M' }
                ]
            },
            {
                num: 47, name: 'Permutations', tier: 'must', freq: 'high', problems: [
                    { t: '31. Next Permutation', d: 'M' }, { t: '46. Permutations', d: 'M' }, { t: '47. Permutations II', d: 'M' }, { t: '60. Permutation Sequence', d: 'H' }
                ]
            },
            {
                num: 48, name: 'Combination Sum', tier: 'must', freq: 'high', problems: [
                    { t: '39. Combination Sum', d: 'M' }, { t: '40. Combination Sum II', d: 'M' }, { t: '216. Combination Sum III', d: 'M' }
                ]
            },
            {
                num: 49, name: 'Parentheses Generation', tier: 'must', freq: 'high', problems: [
                    { t: '22. Generate Parentheses', d: 'M' }, { t: '301. Remove Invalid Parentheses', d: 'H' }
                ]
            },
            {
                num: 50, name: 'Word Search / Path Finding in Grid', tier: 'must', freq: 'high', problems: [
                    { t: '79. Word Search', d: 'M' }, { t: '212. Word Search II', d: 'H' }, { t: '980. Unique Paths III', d: 'H' }
                ]
            },
            {
                num: 51, name: 'N-Queens / Constraint Satisfaction', tier: 'important', freq: 'medium', problems: [
                    { t: '37. Sudoku Solver', d: 'H' }, { t: '51. N-Queens', d: 'H' }
                ]
            },
            {
                num: 52, name: 'Palindrome Partitioning', tier: 'important', freq: 'medium', problems: [
                    { t: '131. Palindrome Partitioning', d: 'M' }, { t: '132. Palindrome Partitioning II', d: 'H' }, { t: '1457. Pseudo-Palindromic Paths in a Binary Tree', d: 'M' }
                ]
            }
            ,
            {
                "num": 1001,
                "name": "Topicwise Extras",
                "tier": "topicwise",
                "freq": "medium",
                "problems": [
                    {
                        "t": "Design Twitter",
                        "d": "M"
                    },
                    {
                        "t": "Hand of Straights",
                        "d": "M"
                    },
                    {
                        "t": "IPO",
                        "d": "H"
                    }
                ]
            },
            { "num": 995, "name": "Topicwise Extras", "tier": "topicwise", "freq": "medium", "problems": [{ "t": "Sum of All Subset XOR Totals", "d": "E" }, { "t": "1261. Find Elements in a Contaminated Binary Tree", "d": "M" }, { "t": "The Number of Beautiful Subsets (Revisit)", "d": "M" }, { "t": "Count of Range Sum", "d": "M" }, { "t": "N-Queens II", "d": "H" }, { "t": "Expression Add Operators", "d": "H" }, { "t": "Maximum Score Words Formed by Letters", "d": "H" }, { "t": "24 Game  (Revisit)", "d": "H" }] }]
    },
    {
        id: 'greedy', title: 'Greedy Patterns', number: 'VIII', icon: '💰',
        patterns: [
            {
                num: 53, name: 'Interval Merging/Scheduling', tier: 'must', freq: 'high', problems: [
                    { t: '56. Merge Intervals', d: 'M' }, { t: '57. Insert Interval', d: 'M' }, { t: '759. Employee Free Time', d: 'H' }, { t: '986. Interval List Intersections', d: 'M' }, { t: '2406. Divide Intervals Into Minimum Number of Groups', d: 'M' }, { t: '252. Meeting Rooms', d: 'E' }
                ]
            },
            {
                num: 54, name: 'Jump Game Reachability/Minimization', tier: 'important', freq: 'medium', problems: [
                    { t: '45. Jump Game II', d: 'M' }, { t: '55. Jump Game', d: 'M' }
                ]
            },
            {
                num: 55, name: 'Greedy Choice / Partitioning', tier: 'must', freq: 'high', problems: [
                    { t: '763. Partition Labels', d: 'M' }, { t: '128. Longest Consecutive Sequence', d: 'M' }, { t: '179. Largest Number', d: 'M' }
                ]
            },
            {
                num: 56, name: 'Gas Station Circuit', tier: 'important', freq: 'medium', problems: [
                    { t: '134. Gas Station', d: 'M' }, { t: '2202. Maximize the Topmost Element After K Moves', d: 'M' }
                ]
            },
            {
                num: 57, name: 'Task Scheduling', tier: 'must', freq: 'high', problems: [
                    { t: '621. Task Scheduler', d: 'M' }, { t: '767. Reorganize String', d: 'M' }, { t: '1054. Distant Barcodes', d: 'M' }
                ]
            },
            {
                num: 58, name: 'Sorting Based', tier: 'important', freq: 'medium', problems: [
                    { t: '455. Assign Cookies', d: 'E' }, { t: '135. Candy', d: 'H' }, { t: '406. Queue Reconstruction by Height', d: 'M' }, { t: '1029. Two City Scheduling', d: 'M' }
                ]
            }
            ,
            { "num": 991, "name": "Topicwise Extras", "tier": "topicwise", "freq": "medium", "problems": [{ "t": "Relative Sort Array", "d": "E" }, { "t": "Minimum Number of Moves to Seat Everyone", "d": "E" }, { "t": "Minimum Increment to Make Array Unique", "d": "M" }, { "t": "Most profit Assigning Work", "d": "M" }, { "t": "Lemonade Change", "d": "E" }, { "t": "Largest Odd Number in String", "d": "E" }, { "t": "Height Checker", "d": "E" }, { "t": "Maximum Height of a Triangle", "d": "E" }, { "t": "Non-overlapping Intervals", "d": "M" }, { "t": "Minimum Number of Arrows to Burst Balloons", "d": "M" }, { "t": "Score After Flipping Matrix", "d": "M" }, { "t": "Car Pooling", "d": "M" }, { "t": "Maximize Happiness of Selected Children", "d": "M" }, { "t": "Minimum Difference Between Largest and Smallest Value in Three Moves", "d": "M" }, { "t": "Average Waiting Time", "d": "M" }, { "t": "Maximum Points After Enemy Battles", "d": "M" }, { "t": "Minimum Number of Pushes to Type Word II", "d": "M" }, { "t": "Time Needed to Rearrange a Binary String  (Revisit)", "d": "M" }, { "t": "Find Valid Matrix Given Row and Column Sums  (Revisit)", "d": "M" }, { "t": "Find the Maximum Length of Valid Subsequence I   (Revisit)", "d": "M" }, { "t": "Put Marbles in Bags", "d": "H" }, { "t": "Find the Maximum Sum of Node Values  (Revisit)", "d": "H" }, { "t": "Patching Array", "d": "H" }] }]
    },
    {
        id: 'binary-search', title: 'Binary Search Patterns', number: 'IX', icon: '🔍',
        patterns: [
            {
                num: 59, name: 'On Sorted Array/List', tier: 'must', freq: 'high', problems: [
                    { t: '35. Search Insert Position', d: 'E' }, { t: '69. Sqrt(x)', d: 'E' }, { t: '74. Search a 2D Matrix', d: 'M' }, { t: '240. Search a 2D Matrix II', d: 'M' }, { t: '278. First Bad Version', d: 'E' }, { t: '540. Single Element in a Sorted Array', d: 'M' }, { t: '704. Binary Search', d: 'E' }, { t: '1539. Kth Missing Positive Number', d: 'E' }
                ]
            },
            {
                num: 60, name: 'Find Min/Max in Rotated Sorted Array', tier: 'must', freq: 'high', problems: [
                    { t: '33. Search in Rotated Sorted Array', d: 'M' }, { t: '81. Search in Rotated Sorted Array II', d: 'M' }, { t: '153. Find Minimum in Rotated Sorted Array', d: 'M' }, { t: '162. Find Peak Element', d: 'M' }, { t: '852. Peak Index in a Mountain Array', d: 'M' }, { t: '1095. Find in Mountain Array', d: 'H' }
                ]
            },
            {
                num: 61, name: 'On Answer / Condition Function', tier: 'must', freq: 'high', problems: [
                    { t: '410. Split Array Largest Sum', d: 'H' }, { t: '774. Minimize Max Distance to Gas Station', d: 'H' }, { t: '875. Koko Eating Bananas', d: 'M' }, { t: '1011. Capacity To Ship Packages Within D Days', d: 'M' }, { t: '1482. Minimum Number of Days to Make m Bouquets', d: 'M' }, { t: '1760. Minimum Limit of Balls in a Bag', d: 'M' }, { t: '2064. Minimized Maximum of Products Distributed to Any Store', d: 'M' }, { t: '2226. Maximum Candies Allocated to K Children', d: 'M' }
                ]
            },
            {
                num: 62, name: 'Find First/Last Occurrence', tier: 'important', freq: 'medium', problems: [
                    { t: '34. Find First and Last Position of Element in Sorted Array', d: 'M' }, { t: '658. Find K Closest Elements', d: 'M' }
                ]
            },
            {
                num: 63, name: 'Median / Kth across Two Sorted Arrays', tier: 'must', freq: 'high', problems: [
                    { t: '4. Median of Two Sorted Arrays', d: 'H' }, { t: '719. Find K-th Smallest Pair Distance', d: 'H' }, { t: '378. Kth Smallest Element in a Sorted Matrix', d: 'M' }
                ]
            }
            ,
            { "num": 994, "name": "Topicwise Extras", "tier": "topicwise", "freq": "medium", "problems": [{ "t": "Valid Perfect Square", "d": "E" }, { "t": "Check if Array Is Sorted and Rotated", "d": "E" }, { "t": "K-th Smallest Prime Fraction (Revisit)", "d": "M" }, { "t": "Find the Smallest Divisor Given a Threshold", "d": "M" }, { "t": "Magnetic Force Between Two Balls", "d": "M" }, { "t": "Find a Peak Element II", "d": "M" }, { "t": "Heaters  (Revisit)", "d": "M" }, { "t": "Kth Smallest Number in Multiplication Table  (Revisit)", "d": "H" }, { "t": "Convert Sorted Array to Binary Search Tree", "d": "E" }, { "t": "Two Sum IV - Input is a BST", "d": "E" }, { "t": "Search in a Binary Search Tree", "d": "E" }, { "t": "Recover Binary Search Tree", "d": "M" }, { "t": "Delete Node in a BST", "d": "M" }, { "t": "Insert into a Binary Search Tree", "d": "M" }, { "t": "1008. Construct Binary Search Tree from preorder traversal", "d": "M" }, { "t": "Balance a Binary Search Tree", "d": "M" }, { "t": "Binary Search Tree to Greater Sum Tree", "d": "M" }] }]
    },
    {
        id: 'stack', title: 'Stack Patterns', number: 'X', icon: '📚',
        patterns: [
            {
                num: 64, name: 'Valid Parentheses Matching', tier: 'important', freq: 'medium', problems: [
                    { t: '20. Valid Parentheses', d: 'E' }, { t: '32. Longest Valid Parentheses', d: 'H' }, { t: '921. Minimum Add to Make Parentheses Valid', d: 'M' }, { t: '1249. Minimum Remove to Make Valid Parentheses', d: 'M' }, { t: '1963. Minimum Number of Swaps to Make the String Balanced', d: 'M' }
                ]
            },
            {
                num: 65, name: 'Monotonic Stack', tier: 'must', freq: 'high', problems: [
                    { t: '316. Remove Duplicate Letters', d: 'M' }, { t: '402. Remove K Digits', d: 'M' }, { t: '496. Next Greater Element I', d: 'E' }, { t: '503. Next Greater Element II', d: 'M' }, { t: '739. Daily Temperatures', d: 'M' }, { t: '901. Online Stock Span', d: 'M' }, { t: '907. Sum of Subarray Minimums', d: 'M' }, { t: '962. Maximum Width Ramp', d: 'M' }, { t: '1673. Find the Most Competitive Subsequence', d: 'M' }
                ]
            },
            {
                num: 66, name: 'Expression Evaluation', tier: 'must', freq: 'high', problems: [
                    { t: '150. Evaluate Reverse Polish Notation', d: 'M' }, { t: '224. Basic Calculator', d: 'H' }, { t: '227. Basic Calculator II', d: 'M' }, { t: '772. Basic Calculator III', d: 'H' }
                ]
            },
            {
                num: 67, name: 'Simulation / Backtracking Helper', tier: 'important', freq: 'medium', problems: [
                    { t: '71. Simplify Path', d: 'M' }, { t: '394. Decode String', d: 'M' }, { t: '735. Asteroid Collision', d: 'M' }
                ]
            },
            {
                num: 68, name: 'Min Stack Design', tier: 'important', freq: 'medium', problems: [
                    { t: '155. Min Stack', d: 'M' }, { t: '895. Maximum Frequency Stack', d: 'H' }, { t: '901. Online Stock Span', d: 'M' }
                ]
            },
            {
                num: 69, name: 'Largest Rectangle in Histogram', tier: 'must', freq: 'high', problems: [
                    { t: '84. Largest Rectangle in Histogram', d: 'H' }, { t: '85. Maximal Rectangle', d: 'H' }
                ]
            }
        ]
    },
    {
        id: 'bit-manipulation', title: 'Bit Manipulation Patterns', number: 'XI', icon: '⚡',
        patterns: [
            {
                num: 70, name: 'Bitwise XOR - Finding Single/Missing Number', tier: 'good', freq: 'low', problems: [
                    { t: '136. Single Number', d: 'E' }, { t: '137. Single Number II', d: 'M' }, { t: '260. Single Number III', d: 'M' }, { t: '268. Missing Number', d: 'E' }
                ]
            },
            {
                num: 71, name: 'Bitwise AND - Counting Set Bits (Hamming Weight)', tier: 'good', freq: 'low', problems: [
                    { t: '191. Number of 1 Bits', d: 'E' }, { t: '231. Power of Two', d: 'E' }, { t: '477. Total Hamming Distance', d: 'M' }
                ]
            },
            {
                num: 72, name: 'Bitwise DP - Counting Bits Optimization', tier: 'good', freq: 'low', problems: [
                    { t: '338. Counting Bits', d: 'E' }, { t: '1494. Parallel Courses II', d: 'H' }, { t: '1442. Count Triplets That Can Form Two Arrays of Equal XOR', d: 'M' }
                ]
            },
            {
                num: 73, name: 'Bitwise Operations - Power of Two/Four Check', tier: 'good', freq: 'low', problems: [
                    { t: '231. Power of Two', d: 'E' }, { t: '342. Power of Four', d: 'E' }
                ]
            }
            ,
            { "num": 993, "name": "Topicwise Extras", "tier": "topicwise", "freq": "medium", "problems": [{ "t": "Minimum Bit Flips to Convert Number", "d": "E" }, { "t": "Minimum Number of Operations to make Array XOR Equal to K", "d": "M" }, { "t": "Integer Replacement  (Revisit)", "d": "M" }, { "t": "Number of Steps to Reduce a Number in Binary Representation to One  (Revisit)", "d": "M" }, { "t": "Maximum Product of Word Lengths", "d": "M" }, { "t": "UTF-8 Validation  (Revisit)", "d": "M" }, { "t": "Shortest Path Visiting All Nodes  (Revisit)", "d": "H" }] }]
    },
    {
        id: 'linked-list', title: 'Linked List Manipulation Patterns', number: 'XII', icon: '🔗',
        patterns: [
            {
                num: 74, name: 'In-place Reversal', tier: 'must', freq: 'high', problems: [
                    { t: '92. Reverse Linked List II', d: 'M' }, { t: '206. Reverse Linked List', d: 'E' }, { t: '25. Reverse Nodes in k-Group', d: 'H' }, { t: '234. Palindrome Linked List', d: 'E' }, { t: '82. Remove Duplicates from Sorted List II', d: 'M' }, { t: '203. Remove Linked List Elements', d: 'E' }
                ]
            },
            {
                num: 75, name: 'Merging Two Sorted Lists', tier: 'important', freq: 'medium', problems: [
                    { t: '21. Merge Two Sorted Lists', d: 'E' }, { t: '148. Sort List', d: 'M' }, { t: '23. Merge k Sorted Lists', d: 'H' }
                ]
            },
            {
                num: 76, name: 'Addition of Numbers', tier: 'important', freq: 'medium', problems: [
                    { t: '2. Add Two Numbers', d: 'M' }, { t: '445. Add Two Numbers II', d: 'M' }, { t: '369. Plus One Linked List', d: 'M' }
                ]
            },
            {
                num: 77, name: 'Intersection & Cycle Detection', tier: 'important', freq: 'medium', problems: [
                    { t: '160. Intersection of Two Linked Lists', d: 'E' }, { t: '142. Linked List Cycle II', d: 'M' }
                ]
            },
            {
                num: 78, name: 'Reordering / Partitioning', tier: 'important', freq: 'medium', problems: [
                    { t: '24. Swap Nodes in Pairs', d: 'M' }, { t: '61. Rotate List', d: 'M' }, { t: '86. Partition List', d: 'M' }, { t: '143. Reorder List', d: 'M' }, { t: '328. Odd Even Linked List', d: 'M' }
                ]
            }
            ,
            { "num": 1002, "name": "Topicwise Extras", "tier": "topicwise", "freq": "medium", "problems": [{ "t": "Remove Duplicates from Sorted List", "d": "E" }, { "t": "Delete Node in a Linked List", "d": "M" }, { "t": "Double a Number Represented as Linked List", "d": "M" }, { "t": "Find the Minimum and Maximum Number of Nodes Between Critical Points", "d": "M" }] }]
    },
    {
        id: 'array-matrix', title: 'Array/Matrix Manipulation Patterns', number: 'XIII', icon: '📊',
        patterns: [
            {
                num: 79, name: 'In-place Rotation', tier: 'important', freq: 'medium', problems: [
                    { t: '48. Rotate Image', d: 'M' }, { t: '189. Rotate Array', d: 'M' }, { t: '867. Transpose Matrix', d: 'E' }
                ]
            },
            {
                num: 80, name: 'Spiral Traversal', tier: 'important', freq: 'medium', problems: [
                    { t: '54. Spiral Matrix', d: 'M' }, { t: '59. Spiral Matrix II', d: 'M' }, { t: '885. Spiral Matrix III', d: 'M' }, { t: '2326. Spiral Matrix IV', d: 'M' }
                ]
            },
            {
                num: 81, name: 'In-place Marking', tier: 'important', freq: 'medium', problems: [
                    { t: '73. Set Matrix Zeroes', d: 'M' }, { t: '289. Game of Life', d: 'M' }, { t: '498. Diagonal Traverse', d: 'M' }
                ]
            },
            {
                num: 82, name: 'Prefix Sum / Prefix Products', tier: 'must', freq: 'high', problems: [
                    { t: '238. Product of Array Except Self', d: 'M' }, { t: '560. Subarray Sum Equals K', d: 'M' }, { t: '525. Contiguous Array', d: 'M' }, { t: '2483. Minimum Penalty for a Shop', d: 'M' }
                ]
            },
            {
                num: 83, name: 'Hashing / Frequency', tier: 'must', freq: 'high', problems: [
                    { t: '49. Group Anagrams', d: 'M' }, { t: '128. Longest Consecutive Sequence', d: 'M' }, { t: '380. Insert Delete GetRandom O(1)', d: 'M' }, { t: '41. First Missing Positive', d: 'H' }
                ]
            },
            {
                num: 84, name: 'In-place from End', tier: 'good', freq: 'low', problems: [
                    { t: '88. Merge Sorted Array', d: 'E' }, { t: '977. Squares of a Sorted Array', d: 'E' }
                ]
            },
            {
                num: 85, name: 'Cyclic Sort', tier: 'important', freq: 'medium', problems: [
                    { t: '41. First Missing Positive', d: 'H' }, { t: '268. Missing Number', d: 'E' }, { t: '287. Find the Duplicate Number', d: 'M' }, { t: '442. Find All Duplicates in an Array', d: 'M' }, { t: '448. Find All Numbers Disappeared in an Array', d: 'E' }
                ]
            }
        ]
    },
    {
        id: 'string-manipulation', title: 'String Manipulation Patterns', number: 'XIV', icon: '🔤',
        patterns: [
            {
                num: 86, name: 'Palindrome Check', tier: 'important', freq: 'medium', problems: [
                    { t: '125. Valid Palindrome', d: 'E' }, { t: '680. Valid Palindrome II', d: 'E' }, { t: '516. Longest Palindromic Subsequence', d: 'M' }
                ]
            },
            {
                num: 87, name: 'Anagram & Hashing', tier: 'important', freq: 'medium', problems: [
                    { t: '49. Group Anagrams', d: 'M' }, { t: '242. Valid Anagram', d: 'E' }, { t: '271. Encode and Decode Strings', d: 'M' }
                ]
            },
            {
                num: 88, name: 'Character Swap / Transform', tier: 'important', freq: 'medium', problems: [
                    { t: '791. Custom Sort String', d: 'M' }, { t: '767. Reorganize String', d: 'M' }, { t: '777. Swap Adjacent in LR String', d: 'M' }
                ]
            },
            {
                num: 89, name: 'String to Integer (atoi)', tier: 'good', freq: 'low', problems: [
                    { t: '8. String to Integer (atoi)', d: 'M' }, { t: '65. Valid Number', d: 'H' }
                ]
            },
            {
                num: 90, name: 'Manual Simulation', tier: 'good', freq: 'low', problems: [
                    { t: '43. Multiply Strings', d: 'M' }, { t: '415. Add Strings', d: 'E' }, { t: '67. Add Binary', d: 'E' }
                ]
            },
            {
                num: 91, name: 'String Matching - KMP / Rabin-Karp', tier: 'important', freq: 'medium', problems: [
                    { t: '28. Find the Index of the First Occurrence in a String', d: 'E' }, { t: '214. Shortest Palindrome', d: 'H' }, { t: '686. Repeated String Match', d: 'M' }, { t: '796. Rotate String', d: 'E' }
                ]
            },
            {
                num: 92, name: 'Repeated Substring & Parsing', tier: 'good', freq: 'low', problems: [
                    { t: '459. Repeated Substring Pattern', d: 'E' }, { t: '394. Decode String', d: 'M' }, { t: '468. Validate IP Address', d: 'M' }
                ]
            }
        ]
    },
    {
        id: 'design', title: 'Design Patterns', number: 'XV', icon: '🏗️',
        patterns: [
            {
                num: 93, name: 'Design (General/Specific)', tier: 'must', freq: 'high', problems: [
                    { t: '146. LRU Cache', d: 'M' }, { t: '155. Min Stack', d: 'M' }, { t: '225. Implement Stack using Queues', d: 'E' }, { t: '232. Implement Queue using Stacks', d: 'E' }, { t: '251. Flatten 2D Vector', d: 'M' }, { t: '271. Encode and Decode Strings', d: 'M' }, { t: '295. Find Median from Data Stream', d: 'H' }, { t: '341. Flatten Nested List Iterator', d: 'M' }, { t: '346. Moving Average from Data Stream', d: 'E' }, { t: '359. Logger Rate Limiter', d: 'E' }, { t: '362. Design Hit Counter', d: 'M' }, { t: '380. Insert Delete GetRandom O(1)', d: 'M' }, { t: '432. All O`one Data Structure', d: 'H' }, { t: '460. LFU Cache', d: 'H' }, { t: '622. Design Circular Queue', d: 'M' }, { t: '642. Design Search Autocomplete System', d: 'H' }, { t: '706. Design HashMap', d: 'E' }, { t: '715. Range Module', d: 'H' }, { t: '981. Time Based Key-Value Store', d: 'M' }, { t: '1146. Snapshot Array', d: 'M' }, { t: '1352. Product of the Last K Numbers', d: 'M' }, { t: '1381. Design a Stack With Increment Operation', d: 'M' }, { t: '2013. Detect Squares', d: 'M' }, { t: '2034. Stock Price Fluctuation', d: 'M' }, { t: '2296. Design a Text Editor', d: 'H' }
                ]
            },
            {
                num: 94, name: 'Tries', tier: 'must', freq: 'high', problems: [
                    { t: '208. Implement Trie (Prefix Tree)', d: 'M' }, { t: '211. Design Add and Search Words Data Structure', d: 'M' }, { t: '720. Longest Word in Dictionary', d: 'M' }, { t: '648. Replace Words', d: 'M' }, { t: '425. Word Squares', d: 'H' }, { t: '642. Design Search Autocomplete System', d: 'H' }, { t: '745. Prefix and Suffix Search', d: 'H' }
                ]
            }
        ]
    },

    {
        "id": "randomization-topic",
        "title": "[Topics] Randomization",
        "number": "TP",
        "icon": "\ud83d\udcca",
        "patterns": [
            {
                "num": 901,
                "name": "Mixed Problems",
                "tier": "topicwise",
                "freq": "medium",
                "problems": [
                    {
                        "t": "Guess the Word",
                        "d": "H"
                    }
                ]
            }
        ]
    },
    {
        "id": "array-string-topic",
        "title": "[Topics] Array-string",
        "number": "TP",
        "icon": "\ud83d\udd00",
        "patterns": [
            {
                "num": 990,
                "name": "Topicwise Extras",
                "tier": "topicwise",
                "freq": "medium",
                "problems": [
                    {
                        "t": "Pascal's Triangle",
                        "d": "E"
                    },
                    {
                        "t": "Majority Element",
                        "d": "E"
                    },
                    {
                        "t": "Summary Ranges",
                        "d": "E"
                    },
                    {
                        "t": "Max Consecutive Ones",
                        "d": "E"
                    },
                    {
                        "t": "Find Pivot Index",
                        "d": "E"
                    },
                    {
                        "t": "Largest Local Values in a Matrix",
                        "d": "E"
                    },
                    {
                        "t": "Row With Maximum Ones",
                        "d": "E"
                    },
                    {
                        "t": "Check if Grid Satisfies Conditions",
                        "d": "E"
                    },
                    {
                        "t": "Special Array With X Elements Greater Than or Equal X",
                        "d": "E"
                    },
                    {
                        "t": "Maximum Score from Subarray Minimums | Practice | GeeksforGeeks (Revisit)",
                        "d": "E"
                    },
                    {
                        "t": "Majority Element II",
                        "d": "M"
                    },
                    {
                        "t": "H-Index",
                        "d": "M"
                    },
                    {
                        "t": "Time Needed to Inform All Employees",
                        "d": "M"
                    },
                    {
                        "t": "Global and Local Inversions (merge sort usage)",
                        "d": "M"
                    },
                    {
                        "t": "Sort an Array",
                        "d": "M"
                    },
                    {
                        "t": "Range Sum of Sorted Subarray Sums  (Revisit: try with priority queue, insert all elements inititally)",
                        "d": "M"
                    },
                    {
                        "t": "Quick Sort",
                        "d": "M"
                    },
                    {
                        "t": "Reverse Pairs",
                        "d": "H"
                    },
                    {
                        "t": "Length of Last Word",
                        "d": "E"
                    },
                    {
                        "t": "Delete Columns to Make Sorted",
                        "d": "E"
                    },
                    {
                        "t": "Score of a String",
                        "d": "E"
                    },
                    {
                        "t": "Longest Uncommon Subsequence I  (Revisit)",
                        "d": "E"
                    },
                    {
                        "t": "Zigzag Conversion",
                        "d": "M"
                    },
                    {
                        "t": "Count and Say",
                        "d": "M"
                    },
                    {
                        "t": "Compare Version Numbers",
                        "d": "M"
                    },
                    {
                        "t": "Sum of Beauty of All Substrings",
                        "d": "M"
                    },
                    {
                        "t": "Remove All Occurrences of a Substring",
                        "d": "M"
                    },
                    {
                        "t": "Longest Uncommon Subsequence II  (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "Longest Word in Dictionary through Deleting  (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "Text Justification",
                        "d": "H"
                    },
                    {
                        "t": "Binary Subarrays With Sum",
                        "d": "M"
                    },
                    {
                        "t": "Number of Wonderful Substrings (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "Minimum Operations to Make Binary Array Elements Equal to One II",
                        "d": "M"
                    },
                    {
                        "t": "Minimum Number of K Consecutive Bit Flips   (Revisit)",
                        "d": "H"
                    },
                    {
                        "t": "Number of Subarrays with AND value of K (Revisit)",
                        "d": "H"
                    }
                ]
            }
        ]
    },
    {
        "id": "math-topic",
        "title": "[Topics] Math",
        "number": "TP",
        "icon": "\ud83d\udd22",
        "patterns": [
            {
                "num": 996,
                "name": "Topicwise Extras",
                "tier": "topicwise",
                "freq": "medium",
                "problems": [
                    {
                        "t": "Palindrome Number",
                        "d": "E"
                    },
                    {
                        "t": "Roman to Integer",
                        "d": "E"
                    },
                    {
                        "t": "Complement of Base 10 Integer",
                        "d": "E"
                    },
                    {
                        "t": "Distribute Candies to People",
                        "d": "E"
                    },
                    {
                        "t": "Power of Three",
                        "d": "E"
                    },
                    {
                        "t": "Integer to Roman",
                        "d": "M"
                    },
                    {
                        "t": "Pow(x, n)",
                        "d": "M"
                    },
                    {
                        "t": "Count Primes",
                        "d": "M"
                    },
                    {
                        "t": "Ugly Number II",
                        "d": "M"
                    },
                    {
                        "t": "Count Good Numbers",
                        "d": "M"
                    },
                    {
                        "t": "Reverse Integer",
                        "d": "M"
                    },
                    {
                        "t": "Fraction to Recurring Decimal",
                        "d": "M"
                    },
                    {
                        "t": "Super Ugly Number",
                        "d": "M"
                    },
                    {
                        "t": "Find the Winner of the Circular Game",
                        "d": "M"
                    },
                    {
                        "t": "Maximize Distance to Closest Person",
                        "d": "M"
                    },
                    {
                        "t": "Exam Room (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "Nth Digit  (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "Random Pick with Weight  (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "Count Numbers with Unique Digits  (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "Integer to English Words  (Revisit: look at failed edge cases)",
                        "d": "H"
                    },
                    {
                        "t": "Find the Minimum Area to Cover All Ones I",
                        "d": "M"
                    },
                    {
                        "t": "Find the Minimum Area to Cover All Ones II",
                        "d": "H"
                    }
                ]
            }
        ]
    },
    {
        "id": "tree-graph-topic",
        "title": "[Topics] Tree-graph",
        "number": "TP",
        "icon": "\ud83d\udd24",
        "patterns": [
            {
                "num": 997,
                "name": "Topicwise Extras",
                "tier": "topicwise",
                "freq": "medium",
                "problems": [
                    {
                        "t": "Valid Sudoku",
                        "d": "M"
                    },
                    {
                        "t": "Minimum Number of Flips to Make Binary Grid Palindromic I",
                        "d": "M"
                    },
                    {
                        "t": "Construct Quad Tree",
                        "d": "M"
                    },
                    {
                        "t": "Snakes and Ladders (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "Shortest Bridge",
                        "d": "M"
                    },
                    {
                        "t": "Coloring A Border",
                        "d": "M"
                    },
                    {
                        "t": "As Far from Land as Possible",
                        "d": "M"
                    },
                    {
                        "t": "Check if Word Can Be Placed In Crossword  (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "Minimum Number of Flips to Make Binary Grid Palindromic II (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "Magic Squares In Grid",
                        "d": "M"
                    },
                    {
                        "t": "Longest Common Prefix",
                        "d": "E"
                    },
                    {
                        "t": "Maximum XOR of Two Numbers in an Array",
                        "d": "M"
                    },
                    {
                        "t": "Maximum XOR With an Element From Array",
                        "d": "H"
                    },
                    {
                        "t": "Construct String with Minimum Cost",
                        "d": "H"
                    },
                    {
                        "t": "Stream of Characters  (Revisit)",
                        "d": "H"
                    },
                    {
                        "t": "Binary Tree Preorder Traversal",
                        "d": "E"
                    },
                    {
                        "t": "Path Sum",
                        "d": "E"
                    },
                    {
                        "t": "Count Complete Tree Nodes",
                        "d": "E"
                    },
                    {
                        "t": "Sum of Left Leaves",
                        "d": "E"
                    },
                    {
                        "t": "Evaluate Boolean Binary Tree",
                        "d": "E"
                    },
                    {
                        "t": "Sum Root to Leaf Numbers",
                        "d": "M"
                    },
                    {
                        "t": "Path Sum II",
                        "d": "M"
                    },
                    {
                        "t": "Populating Next Right Pointers in Each Node",
                        "d": "M"
                    },
                    {
                        "t": "Populating Next Right Pointers in Each Node II",
                        "d": "M"
                    },
                    {
                        "t": "Path Sum III",
                        "d": "M"
                    },
                    {
                        "t": "Maximum Width of Binary Tree",
                        "d": "M"
                    },
                    {
                        "t": "958. Check Completeness of a Binary Tree",
                        "d": "M"
                    },
                    {
                        "t": "Distribute Coins in Binary Tree",
                        "d": "M"
                    },
                    {
                        "t": "Delete Leaves With a Given Value",
                        "d": "M"
                    },
                    {
                        "t": "Count Good Nodes in Binary Tree",
                        "d": "M"
                    },
                    {
                        "t": "Create Binary Tree From Descriptions",
                        "d": "M"
                    },
                    {
                        "t": "Number of Good Leaf Nodes Pairs  (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "Step-By-Step Directions From a Binary Tree Node to Another (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "Vertical Order Traversal of a Binary Tree",
                        "d": "H"
                    },
                    {
                        "t": "Maximum Sum BST in Binary Tree",
                        "d": "H"
                    },
                    {
                        "t": "Find Center of Star Graph",
                        "d": "E"
                    },
                    {
                        "t": "Maximum Total Importance of Roads",
                        "d": "M"
                    },
                    {
                        "t": "Minimum Genetic Mutation",
                        "d": "M"
                    },
                    {
                        "t": "Is Graph Bipartite?",
                        "d": "M"
                    },
                    {
                        "t": "All Paths From Source to Target",
                        "d": "M"
                    },
                    {
                        "t": "Possible Bipartition",
                        "d": "M"
                    },
                    {
                        "t": "Maximal Network Rank",
                        "d": "M"
                    },
                    {
                        "t": "All Ancestors of a Node in a Directed Acyclic Graph",
                        "d": "M"
                    },
                    {
                        "t": "Minimum Cost to Convert String I  (Floyd Warshall)",
                        "d": "M"
                    },
                    {
                        "t": "Find Minimum Diameter After Merging Two Trees",
                        "d": "H"
                    },
                    {
                        "t": "K-Similar Strings  (Revisit)",
                        "d": "H"
                    },
                    {
                        "t": "Minimum Number of Days to Disconnect Island  (Revisit: Articulation points)",
                        "d": "H"
                    },
                    {
                        "t": "Satisfiability of Equality Equations",
                        "d": "M"
                    },
                    {
                        "t": "Number of Operations to Make Network Connected",
                        "d": "M"
                    },
                    {
                        "t": "Making A Large Island",
                        "d": "H"
                    },
                    {
                        "t": "Similar String Groups",
                        "d": "H"
                    },
                    {
                        "t": "Remove Max Number of Edges to Keep Graph Fully Traversable (Revisit)",
                        "d": "H"
                    },
                    {
                        "t": "Redundant Connection II   (Revisit and understand the why? )",
                        "d": "H"
                    },
                    {
                        "t": "Range Sum Query - Immutable",
                        "d": "E"
                    },
                    {
                        "t": "Range Sum Query - Mutable",
                        "d": "M"
                    }
                ]
            }
        ]
    },
    {
        "id": "stack-queue-topic",
        "title": "[Topics] Stack-queue",
        "number": "TP",
        "icon": "\ud83d\udc46",
        "patterns": [
            {
                "num": 998,
                "name": "Topicwise Extras",
                "tier": "topicwise",
                "freq": "medium",
                "problems": [
                    {
                        "t": "Remove Outermost Parentheses",
                        "d": "E"
                    },
                    {
                        "t": "Remove All Adjacent Duplicates In String",
                        "d": "E"
                    },
                    {
                        "t": "Final Prices With a Special Discount in a Shop",
                        "d": "E"
                    },
                    {
                        "t": "Maximum Nesting Depth of the Parentheses",
                        "d": "E"
                    },
                    {
                        "t": "Valid Parenthesis String",
                        "d": "M"
                    },
                    {
                        "t": "Sum of Subarray Ranges",
                        "d": "M"
                    },
                    {
                        "t": "Car Fleet",
                        "d": "M"
                    },
                    {
                        "t": "Reverse Substrings Between Each Pair of Parentheses",
                        "d": "M"
                    },
                    {
                        "t": "Minimum Deletions to Make String Balanced  (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "Verify Preorder Serialization of a Binary Tree  (use stack)",
                        "d": "M"
                    },
                    {
                        "t": "Longest Absolute File Path  (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "1717. Maximum Score From Removing Substrings (Revisit)",
                        "d": "M"
                    },
                    {
                        "t": "Robot Collisions",
                        "d": "H"
                    },
                    {
                        "t": "Number of Atoms",
                        "d": "H"
                    },
                    {
                        "t": "Car Fleet II  (Revisit)",
                        "d": "H"
                    },
                    {
                        "t": "Design Circular Deque",
                        "d": "M"
                    }
                ]
            }
        ]
    },
    {
        "id": "hashmap-topic",
        "title": "[Topics] Hashmap",
        "number": "TP",
        "icon": "\u26a1",
        "patterns": [
            {
                "num": 1000,
                "name": "Topicwise Extras",
                "tier": "topicwise",
                "freq": "medium",
                "problems": [
                    {
                        "t": "Max Sum of Rectangle No Larger Than K  (Revisit)",
                        "d": "H"
                    },
                    {
                        "t": "Create Maximum Number  (Revisit)",
                        "d": "H"
                    },
                    {
                        "t": "Isomorphic Strings",
                        "d": "E"
                    },
                    {
                        "t": "Word Pattern",
                        "d": "E"
                    },
                    {
                        "t": "Ransom Note",
                        "d": "E"
                    },
                    {
                        "t": "Find the Town Judge",
                        "d": "E"
                    },
                    {
                        "t": "Unique Number of Occurrences",
                        "d": "E"
                    },
                    {
                        "t": "Find Common Characters",
                        "d": "E"
                    },
                    {
                        "t": "Employee Importance (Special)",
                        "d": "M"
                    }
                ]
            }
        ]
    },

];
