// =============================================
// THITA PATTERNS — App Logic v2.0
// With progress tracking, difficulty badges, checkboxes
// =============================================

const STORAGE_KEY = 'thita-solved';

// ===== DATA (with difficulty: E=Easy, M=Medium, H=Hard) =====
const DATA = [
    {
        id: 'two-pointer',
        title: 'Two Pointer Patterns',
        number: 'I',
        icon: '👆',
        patterns: [
            {
                num: 1, name: 'Converging', problems: [
                    { t: '11. Container With Most Water', d: 'M' }, { t: '15. 3Sum', d: 'M' }, { t: '16. 3Sum Closest', d: 'M' }, { t: '18. 4Sum', d: 'M' }, { t: '167. Two Sum II - Input Array Is Sorted', d: 'M' }, { t: '349. Intersection of Two Arrays', d: 'E' }, { t: '881. Boats to Save People', d: 'M' }, { t: '977. Squares of a Sorted Array', d: 'E' }, { t: '259. 3Sum Smaller', d: 'M' }
                ]
            },
            {
                num: 2, name: 'Fast & Slow', problems: [
                    { t: '141. Linked List Cycle', d: 'E' }, { t: '202. Happy Number', d: 'E' }, { t: '287. Find the Duplicate Number', d: 'M' }, { t: '392. Is Subsequence', d: 'E' }
                ]
            },
            {
                num: 3, name: 'Fixed Separation', problems: [
                    { t: '19. Remove Nth Node From End of List', d: 'M' }, { t: '876. Middle of the Linked List', d: 'E' }, { t: '2095. Delete the Middle Node of a Linked List', d: 'M' }
                ]
            },
            {
                num: 4, name: 'In-place Array Modification', problems: [
                    { t: '26. Remove Duplicates from Sorted Array', d: 'E' }, { t: '27. Remove Element', d: 'E' }, { t: '75. Sort Colors', d: 'M' }, { t: '80. Remove Duplicates from Sorted Array II', d: 'M' }, { t: '283. Move Zeroes', d: 'E' }, { t: '443. String Compression', d: 'M' }, { t: '905. Sort Array By Parity', d: 'E' }, { t: '2337. Move Pieces to Obtain a String', d: 'M' }, { t: '2938. Separate Black and White Balls', d: 'M' }
                ]
            },
            {
                num: 5, name: 'String Comparison with Special Characters', problems: [
                    { t: '844. Backspace String Compare', d: 'E' }, { t: '1598. Crawler Log Folder', d: 'E' }, { t: '2390. Removing Stars From a String', d: 'M' }
                ]
            },
            {
                num: 6, name: 'Expanding From Center', problems: [
                    { t: '5. Longest Palindromic Substring', d: 'M' }, { t: '647. Palindromic Substrings', d: 'M' }
                ]
            },
            {
                num: 7, name: 'String Reversal', problems: [
                    { t: '151. Reverse Words in a String', d: 'M' }, { t: '344. Reverse String', d: 'E' }, { t: '345. Reverse Vowels of a String', d: 'E' }, { t: '541. Reverse String II', d: 'E' }
                ]
            },
        ]
    },
    {
        id: 'sliding-window',
        title: 'Sliding Window Patterns',
        number: 'II',
        icon: '🪟',
        patterns: [
            {
                num: 8, name: 'Fixed Size', problems: [
                    { t: '346. Moving Average from Data Stream', d: 'E' }, { t: '643. Maximum Average Subarray I', d: 'E' }, { t: '2985. Calculate Compressed Mean', d: 'M' }, { t: '3254. Find the Power of K-Size Subarrays I', d: 'M' }, { t: '3318. Find X-Sum of All K-Long Subarrays I', d: 'M' }
                ]
            },
            {
                num: 9, name: 'Variable Size', problems: [
                    { t: '3. Longest Substring Without Repeating Characters', d: 'M' }, { t: '76. Minimum Window Substring', d: 'H' }, { t: '209. Minimum Size Subarray Sum', d: 'M' }, { t: '219. Contains Duplicate II', d: 'E' }, { t: '424. Longest Repeating Character Replacement', d: 'M' }, { t: '713. Subarray Product Less Than K', d: 'M' }, { t: '904. Fruit Into Baskets', d: 'M' }, { t: '1004. Max Consecutive Ones III', d: 'M' }, { t: '1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit', d: 'M' }, { t: '1493. Longest Subarray of 1\'s After Deleting One Element', d: 'M' }, { t: '1658. Minimum Operations to Reduce X to Zero', d: 'M' }, { t: '1838. Frequency of the Most Frequent Element', d: 'M' }, { t: '2461. Maximum Sum of Distinct Subarrays With Length K', d: 'M' }, { t: '2516. Take K of Each Character From Left and Right', d: 'M' }, { t: '2762. Continuous Subarrays', d: 'M' }, { t: '2779. Maximum Beauty of an Array After Applying Operation', d: 'M' }, { t: '2981. Find Longest Special Substring That Occurs Thrice I', d: 'M' }, { t: '3026. Maximum Good Subarray Sum', d: 'M' }, { t: '3346. Maximum Frequency of an Element After Performing Operations I', d: 'M' }, { t: '3347. Maximum Frequency of an Element After Performing Operations II', d: 'H' }
                ]
            },
            {
                num: 10, name: 'Monotonic Queue for Max/Min', problems: [
                    { t: '239. Sliding Window Maximum', d: 'H' }, { t: '862. Shortest Subarray with Sum at Least K', d: 'H' }, { t: '1696. Jump Game VI', d: 'M' }
                ]
            },
            {
                num: 11, name: 'Character Frequency Matching', problems: [
                    { t: '1. Two Sum', d: 'E' }, { t: '438. Find All Anagrams in a String', d: 'M' }, { t: '567. Permutation in String', d: 'M' }
                ]
            },
        ]
    },
    {
        id: 'tree-traversal',
        title: 'Tree Traversal Patterns (DFS & BFS)',
        number: 'III',
        icon: '🌳',
        patterns: [
            {
                num: 12, name: 'Level Order Traversal', problems: [
                    { t: '102. Binary Tree Level Order Traversal', d: 'M' }, { t: '103. Binary Tree Zigzag Level Order Traversal', d: 'M' }, { t: '199. Binary Tree Right Side View', d: 'M' }, { t: '515. Find Largest Value in Each Tree Row', d: 'M' }, { t: '1161. Maximum Level Sum of a Binary Tree', d: 'M' }
                ]
            },
            {
                num: 13, name: 'Recursive Preorder Traversal', problems: [
                    { t: '100. Same Tree', d: 'E' }, { t: '101. Symmetric Tree', d: 'E' }, { t: '105. Construct Binary Tree from Preorder and Inorder Traversal', d: 'M' }, { t: '114. Flatten Binary Tree to Linked List', d: 'M' }, { t: '226. Invert Binary Tree', d: 'E' }, { t: '257. Binary Tree Paths', d: 'E' }, { t: '988. Smallest String Starting From Leaf', d: 'M' }
                ]
            },
            {
                num: 14, name: 'Recursive Inorder Traversal', problems: [
                    { t: '94. Binary Tree Inorder Traversal', d: 'E' }, { t: '98. Validate Binary Search Tree', d: 'M' }, { t: '173. Binary Search Tree Iterator', d: 'M' }, { t: '230. Kth Smallest Element in a BST', d: 'M' }, { t: '501. Find Mode in Binary Search Tree', d: 'E' }, { t: '530. Minimum Absolute Difference in BST', d: 'E' }
                ]
            },
            {
                num: 15, name: 'Recursive Postorder Traversal', problems: [
                    { t: '104. Maximum Depth of Binary Tree', d: 'E' }, { t: '110. Balanced Binary Tree', d: 'E' }, { t: '124. Binary Tree Maximum Path Sum', d: 'H' }, { t: '145. Binary Tree Postorder Traversal', d: 'E' }, { t: '337. House Robber III', d: 'M' }, { t: '366. Find Leaves of Binary Tree', d: 'M' }, { t: '543. Diameter of Binary Tree', d: 'E' }, { t: '863. All Nodes Distance K in Binary Tree', d: 'M' }, { t: '1110. Delete Nodes And Return Forest', d: 'M' }, { t: '2458. Height of Binary Tree After Subtree Removal Queries', d: 'H' }
                ]
            },
            {
                num: 16, name: 'Lowest Common Ancestor', problems: [
                    { t: '235. Lowest Common Ancestor of a Binary Search Tree', d: 'M' }, { t: '236. Lowest Common Ancestor of a Binary Tree', d: 'M' }
                ]
            },
            {
                num: 17, name: 'Serialization and Deserialization', problems: [
                    { t: '297. Serialize and Deserialize Binary Tree', d: 'H' }, { t: '572. Subtree of Another Tree', d: 'E' }, { t: '652. Find Duplicate Subtrees', d: 'M' }
                ]
            },
        ]
    },
    {
        id: 'graph-traversal',
        title: 'Graph Traversal Patterns (DFS & BFS)',
        number: 'IV',
        icon: '🕸️',
        patterns: [
            {
                num: 18, name: 'DFS - Connected Components / Island Counting', problems: [
                    { t: '130. Surrounded Regions', d: 'M' }, { t: '200. Number of Islands', d: 'M' }, { t: '417. Pacific Atlantic Water Flow', d: 'M' }, { t: '547. Number of Provinces', d: 'M' }, { t: '695. Max Area of Island', d: 'M' }, { t: '733. Flood Fill', d: 'E' }, { t: '841. Keys and Rooms', d: 'M' }, { t: '1020. Number of Enclaves', d: 'M' }, { t: '1254. Number of Closed Islands', d: 'M' }, { t: '1905. Count Sub Islands', d: 'M' }, { t: '2101. Detonate the Maximum Bombs', d: 'M' }
                ]
            },
            {
                num: 19, name: 'BFS - Connected Components / Island Counting', problems: [
                    { t: '542. 01 Matrix', d: 'M' }, { t: '994. Rotting Oranges', d: 'M' }, { t: '1091. Shortest Path in Binary Matrix', d: 'M' }
                ]
            },
            {
                num: 20, name: 'DFS - Cycle Detection', problems: [
                    { t: '207. Course Schedule', d: 'M' }, { t: '210. Course Schedule II', d: 'M' }, { t: '802. Find Eventual Safe States', d: 'M' }, { t: '1059. All Paths from Source Lead to Destination', d: 'M' }
                ]
            },
            {
                num: 21, name: 'BFS - Topological Sort (Kahn\'s Algorithm)', problems: [
                    { t: '210. Course Schedule II', d: 'M' }, { t: '269. Alien Dictionary', d: 'H' }, { t: '310. Minimum Height Trees', d: 'M' }, { t: '444. Sequence Reconstruction', d: 'M' }, { t: '1136. Parallel Courses', d: 'M' }, { t: '1857. Largest Color Value in a Directed Graph', d: 'H' }, { t: '2050. Parallel Courses III', d: 'H' }, { t: '2115. Find All Possible Recipes from Given Supplies', d: 'M' }, { t: '2392. Build a Matrix With Conditions', d: 'H' }
                ]
            },
            {
                num: 22, name: 'Deep Copy / Cloning', problems: [
                    { t: '133. Clone Graph', d: 'M' }, { t: '1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance', d: 'M' }, { t: '138. Copy List with Random Pointer', d: 'M' }, { t: '1490. Clone N-ary Tree', d: 'M' }
                ]
            },
            {
                num: 23, name: 'Shortest Path', problems: [
                    { t: '743. Network Delay Time', d: 'M' }, { t: '778. Swim in Rising Water', d: 'H' }, { t: '1514. Path with Maximum Probability', d: 'M' }, { t: '1631. Path With Minimum Effort', d: 'M' }, { t: '1976. Number of Ways to Arrive at Destination', d: 'M' }, { t: '2045. Second Minimum Time to Reach Destination', d: 'H' }, { t: '2203. Minimum Weighted Subgraph With the Required Paths', d: 'H' }, { t: '2290. Minimum Obstacle Removal to Reach Corner', d: 'H' }, { t: '2577. Minimum Time to Visit a Cell In a Grid', d: 'H' }, { t: '2812. Find the Safest Path in a Grid', d: 'M' }
                ]
            },
            {
                num: 24, name: 'Shortest Path (Bellman-Ford / BFS+K)', problems: [
                    { t: '787. Cheapest Flights Within K Stops', d: 'M' }, { t: '1129. Shortest Path with Alternating Colors', d: 'M' }
                ]
            },
            {
                num: 25, name: 'Union-Find', problems: [
                    { t: '200. Number of Islands', d: 'M' }, { t: '261. Graph Valid Tree', d: 'M' }, { t: '305. Number of Islands II', d: 'H' }, { t: '323. Number of Connected Components in an Undirected Graph', d: 'M' }, { t: '547. Number of Provinces', d: 'M' }, { t: '684. Redundant Connection', d: 'M' }, { t: '721. Accounts Merge', d: 'M' }, { t: '737. Sentence Similarity II', d: 'M' }, { t: '947. Most Stones Removed with Same Row or Column', d: 'M' }, { t: '952. Largest Component Size by Common Factor', d: 'H' }, { t: '959. Regions Cut By Slashes', d: 'M' }, { t: '1101. The Earliest Moment When Everyone Become Friends', d: 'M' }
                ]
            },
            {
                num: 26, name: 'Strongly Connected Components (Kosaraju / Tarjan)', problems: [
                    { t: '210. Course Schedule II', d: 'M' }, { t: '547. Number of Provinces', d: 'M' }, { t: '1192. Critical Connections in a Network', d: 'H' }, { t: '2127. Maximum Employees to Be Invited to a Meeting', d: 'H' }
                ]
            },
            {
                num: 27, name: 'Bridges & Articulation Points (Tarjan low-link)', problems: [
                    { t: '1192. Critical Connections in a Network', d: 'H' }, { t: '2360. Longest Cycle in a Graph', d: 'H' }
                ]
            },
            {
                num: 28, name: 'Minimum Spanning Tree (Kruskal / Prim / DSU + heap)', problems: [
                    { t: '1135. Connecting Cities With Minimum Cost', d: 'M' }, { t: '1584. Min Cost to Connect All Points', d: 'M' }, { t: '1168. Optimize Water Distribution in a Village', d: 'H' }, { t: '1489. Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree', d: 'H' }
                ]
            },
            {
                num: 29, name: 'Bidirectional BFS', problems: [
                    { t: '127. Word Ladder', d: 'H' }, { t: '126. Word Ladder II', d: 'H' }, { t: '815. Bus Routes', d: 'H' }
                ]
            },
        ]
    },
    {
        id: 'dynamic-programming',
        title: 'Dynamic Programming (DP) Patterns',
        number: 'V',
        icon: '🧮',
        patterns: [
            {
                num: 30, name: 'Fibonacci Style', problems: [
                    { t: '70. Climbing Stairs', d: 'E' }, { t: '91. Decode Ways', d: 'M' }, { t: '198. House Robber', d: 'M' }, { t: '213. House Robber II', d: 'M' }, { t: '337. House Robber III', d: 'M' }, { t: '509. Fibonacci Number', d: 'E' }, { t: '740. Delete and Earn', d: 'M' }, { t: '746. Min Cost Climbing Stairs', d: 'E' }
                ]
            },
            {
                num: 31, name: 'Kadane\'s Algorithm for Max/Min Subarray', problems: [
                    { t: '53. Maximum Subarray', d: 'M' }, { t: '918. Maximum Sum Circular Subarray', d: 'M' }, { t: '2321. Maximum Score Of Spliced Array', d: 'H' }, { t: '1749. Maximum Absolute Sum of Any Subarray', d: 'M' }, { t: '152. Maximum Product Subarray', d: 'M' }
                ]
            },
            {
                num: 32, name: 'Coin Change / Unbounded Knapsack Style', problems: [
                    { t: '322. Coin Change', d: 'M' }, { t: '377. Combination Sum IV', d: 'M' }, { t: '518. Coin Change II', d: 'M' }
                ]
            },
            {
                num: 33, name: '0/1 Knapsack, Subset Sum Style', problems: [
                    { t: '416. Partition Equal Subset Sum', d: 'M' }, { t: '494. Target Sum', d: 'M' }
                ]
            },
            {
                num: 34, name: 'Word Break Style', problems: [
                    { t: '139. Word Break', d: 'M' }, { t: '140. Word Break II', d: 'H' }
                ]
            },
            {
                num: 35, name: 'Longest Common Subsequence - LCS', problems: [
                    { t: '1143. Longest Common Subsequence', d: 'M' }, { t: '1092. Shortest Common Supersequence', d: 'H' }, { t: '1312. Minimum Insertion Steps to Make a String Palindrome', d: 'H' }
                ]
            },
            {
                num: 36, name: 'Edit Distance / Levenshtein Distance', problems: [
                    { t: '72. Edit Distance', d: 'M' }, { t: '583. Delete Operation for Two Strings', d: 'M' }, { t: '712. Minimum ASCII Delete Sum for Two Strings', d: 'M' }
                ]
            },
            {
                num: 37, name: 'Unique Paths on Grid', problems: [
                    { t: '62. Unique Paths', d: 'M' }, { t: '63. Unique Paths II', d: 'M' }, { t: '64. Minimum Path Sum', d: 'M' }, { t: '120. Triangle', d: 'M' }, { t: '221. Maximal Square', d: 'M' }, { t: '931. Minimum Falling Path Sum', d: 'M' }, { t: '1277. Count Square Submatrices with All Ones', d: 'M' }
                ]
            },
            {
                num: 38, name: 'Interval DP', problems: [
                    { t: '312. Burst Balloons', d: 'H' }, { t: '546. Remove Boxes', d: 'H' }
                ]
            },
            {
                num: 39, name: 'Catalan Numbers', problems: [
                    { t: '95. Unique Binary Search Trees II', d: 'M' }, { t: '96. Unique Binary Search Trees', d: 'M' }, { t: '241. Different Ways to Add Parentheses', d: 'M' }
                ]
            },
            {
                num: 40, name: 'Longest Increasing Subsequence', problems: [
                    { t: '300. Longest Increasing Subsequence', d: 'M' }, { t: '354. Russian Doll Envelopes', d: 'H' }, { t: '1671. Minimum Number of Removals to Make Mountain Array', d: 'H' }, { t: '2407. Longest Increasing Subsequence II', d: 'H' }
                ]
            },
            {
                num: 41, name: 'Stock Problems', problems: [
                    { t: '121. Best Time to Buy and Sell Stock', d: 'E' }, { t: '122. Best Time to Buy and Sell Stock II', d: 'M' }, { t: '123. Best Time to Buy and Sell Stock III', d: 'H' }, { t: '188. Best Time to Buy and Sell Stock IV', d: 'H' }, { t: '309. Best Time to Buy and Sell Stock with Cooldown', d: 'M' }
                ]
            },
        ]
    },
    {
        id: 'heap',
        title: 'Heap (Priority Queue) Patterns',
        number: 'VI',
        icon: '⛰️',
        patterns: [
            {
                num: 42, name: 'Top K Elements', problems: [
                    { t: '215. Kth Largest Element in an Array', d: 'M' }, { t: '347. Top K Frequent Elements', d: 'M' }, { t: '451. Sort Characters By Frequency', d: 'M' }, { t: '506. Relative Ranks', d: 'E' }, { t: '703. Kth Largest Element in a Stream', d: 'E' }, { t: '973. K Closest Points to Origin', d: 'M' }, { t: '1046. Last Stone Weight', d: 'E' }, { t: '2558. Take Gifts From the Richest Pile', d: 'E' }
                ]
            },
            {
                num: 43, name: 'Two Heaps for Median Finding', problems: [
                    { t: '295. Find Median from Data Stream', d: 'H' }, { t: '1825. Finding MK Average', d: 'H' }
                ]
            },
            {
                num: 44, name: 'K-way Merge', problems: [
                    { t: '23. Merge k Sorted Lists', d: 'H' }, { t: '373. Find K Pairs with Smallest Sums', d: 'M' }, { t: '378. Kth Smallest Element in a Sorted Matrix', d: 'M' }, { t: '632. Smallest Range Covering Elements from K Lists', d: 'H' }
                ]
            },
            {
                num: 45, name: 'Scheduling / Minimum Cost', problems: [
                    { t: '253. Meeting Rooms II', d: 'M' }, { t: '767. Reorganize String', d: 'M' }, { t: '857. Minimum Cost to Hire K Workers', d: 'H' }, { t: '1642. Furthest Building You Can Reach', d: 'M' }, { t: '1792. Maximum Average Pass Ratio', d: 'M' }, { t: '1834. Single-Threaded CPU', d: 'M' }, { t: '1942. The Number of the Smallest Unoccupied Chair', d: 'M' }, { t: '2402. Meeting Rooms III', d: 'H' }
                ]
            },
        ]
    },
    {
        id: 'backtracking',
        title: 'Backtracking Patterns',
        number: 'VII',
        icon: '🔙',
        patterns: [
            {
                num: 46, name: 'Subsets (Include/Exclude)', problems: [
                    { t: '17. Letter Combinations of a Phone Number', d: 'M' }, { t: '77. Combinations', d: 'M' }, { t: '78. Subsets', d: 'M' }, { t: '90. Subsets II', d: 'M' }
                ]
            },
            {
                num: 47, name: 'Permutations', problems: [
                    { t: '31. Next Permutation', d: 'M' }, { t: '46. Permutations', d: 'M' }, { t: '60. Permutation Sequence', d: 'H' }
                ]
            },
            {
                num: 48, name: 'Combination Sum', problems: [
                    { t: '39. Combination Sum', d: 'M' }, { t: '40. Combination Sum II', d: 'M' }
                ]
            },
            {
                num: 49, name: 'Parentheses Generation', problems: [
                    { t: '22. Generate Parentheses', d: 'M' }, { t: '301. Remove Invalid Parentheses', d: 'H' }
                ]
            },
            {
                num: 50, name: 'Word Search / Path Finding in Grid', problems: [
                    { t: '79. Word Search', d: 'M' }, { t: '212. Word Search II', d: 'H' }, { t: '2018. Check if Word Can Be Placed In Crossword', d: 'M' }
                ]
            },
            {
                num: 51, name: 'N-Queens / Constraint Satisfaction', problems: [
                    { t: '37. Sudoku Solver', d: 'H' }, { t: '51. N-Queens', d: 'H' }
                ]
            },
            {
                num: 52, name: 'Palindrome Partitioning', problems: [
                    { t: '131. Palindrome Partitioning', d: 'M' }, { t: '132. Palindrome Partitioning II', d: 'H' }, { t: '1457. Pseudo-Palindromic Paths in a Binary Tree', d: 'M' }
                ]
            },
        ]
    },
    {
        id: 'greedy',
        title: 'Greedy Patterns',
        number: 'VIII',
        icon: '💰',
        patterns: [
            {
                num: 53, name: 'Interval Merging/Scheduling', problems: [
                    { t: '56. Merge Intervals', d: 'M' }, { t: '57. Insert Interval', d: 'M' }, { t: '759. Employee Free Time', d: 'H' }, { t: '986. Interval List Intersections', d: 'M' }, { t: '2406. Divide Intervals Into Minimum Number of Groups', d: 'M' }
                ]
            },
            {
                num: 54, name: 'Jump Game Reachability/Minimization', problems: [
                    { t: '45. Jump Game II', d: 'M' }, { t: '55. Jump Game', d: 'M' }
                ]
            },
            {
                num: 55, name: 'Buy/Sell Stock', problems: [
                    { t: '121. Best Time to Buy and Sell Stock', d: 'E' }, { t: '122. Best Time to Buy and Sell Stock II', d: 'M' }
                ]
            },
            {
                num: 56, name: 'Gas Station Circuit', problems: [
                    { t: '134. Gas Station', d: 'M' }, { t: '2202. Maximize the Topmost Element After K Moves', d: 'M' }
                ]
            },
            {
                num: 57, name: 'Task Scheduling', problems: [
                    { t: '621. Task Scheduler', d: 'M' }, { t: '767. Reorganize String', d: 'M' }, { t: '1054. Distant Barcodes', d: 'M' }
                ]
            },
            {
                num: 58, name: 'Sorting Based', problems: [
                    { t: '455. Assign Cookies', d: 'E' }, { t: '135. Candy', d: 'H' }, { t: '406. Queue Reconstruction by Height', d: 'M' }, { t: '1029. Two City Scheduling', d: 'M' }
                ]
            },
        ]
    },
    {
        id: 'binary-search',
        title: 'Binary Search Patterns',
        number: 'IX',
        icon: '🔍',
        patterns: [
            {
                num: 59, name: 'On Sorted Array/List', problems: [
                    { t: '35. Search Insert Position', d: 'E' }, { t: '69. Sqrt(x)', d: 'E' }, { t: '74. Search a 2D Matrix', d: 'M' }, { t: '278. First Bad Version', d: 'E' }, { t: '374. Guess Number Higher or Lower', d: 'E' }, { t: '540. Single Element in a Sorted Array', d: 'M' }, { t: '704. Binary Search', d: 'E' }, { t: '1539. Kth Missing Positive Number', d: 'E' }
                ]
            },
            {
                num: 60, name: 'Find Min/Max in Rotated Sorted Array', problems: [
                    { t: '33. Search in Rotated Sorted Array', d: 'M' }, { t: '81. Search in Rotated Sorted Array II', d: 'M' }, { t: '153. Find Minimum in Rotated Sorted Array', d: 'M' }, { t: '162. Find Peak Element', d: 'M' }, { t: '852. Peak Index in a Mountain Array', d: 'M' }, { t: '1095. Find in Mountain Array', d: 'H' }
                ]
            },
            {
                num: 61, name: 'On Answer / Condition Function', problems: [
                    { t: '410. Split Array Largest Sum', d: 'H' }, { t: '774. Minimize Max Distance to Gas Station', d: 'H' }, { t: '875. Koko Eating Bananas', d: 'M' }, { t: '1011. Capacity To Ship Packages Within D Days', d: 'M' }, { t: '1482. Minimum Number of Days to Make m Bouquets', d: 'M' }, { t: '1760. Minimum Limit of Balls in a Bag', d: 'M' }, { t: '2064. Minimized Maximum of Products Distributed to Any Store', d: 'M' }, { t: '2226. Maximum Candies Allocated to K Children', d: 'M' }
                ]
            },
            {
                num: 62, name: 'Find First/Last Occurrence', problems: [
                    { t: '34. Find First and Last Position of Element in Sorted Array', d: 'M' }, { t: '658. Find K Closest Elements', d: 'M' }
                ]
            },
            {
                num: 63, name: 'Median / Kth across Two Sorted Arrays', problems: [
                    { t: '4. Median of Two Sorted Arrays', d: 'H' }, { t: '719. Find K-th Smallest Pair Distance', d: 'H' }, { t: '378. Kth Smallest Element in a Sorted Matrix', d: 'M' }
                ]
            },
        ]
    },
    {
        id: 'stack',
        title: 'Stack Patterns',
        number: 'X',
        icon: '📚',
        patterns: [
            {
                num: 64, name: 'Valid Parentheses Matching', problems: [
                    { t: '20. Valid Parentheses', d: 'E' }, { t: '32. Longest Valid Parentheses', d: 'H' }, { t: '921. Minimum Add to Make Parentheses Valid', d: 'M' }, { t: '1249. Minimum Remove to Make Valid Parentheses', d: 'M' }, { t: '1963. Minimum Number of Swaps to Make the String Balanced', d: 'M' }
                ]
            },
            {
                num: 65, name: 'Monotonic Stack', problems: [
                    { t: '402. Remove K Digits', d: 'M' }, { t: '496. Next Greater Element I', d: 'E' }, { t: '503. Next Greater Element II', d: 'M' }, { t: '739. Daily Temperatures', d: 'M' }, { t: '901. Online Stock Span', d: 'M' }, { t: '907. Sum of Subarray Minimums', d: 'M' }, { t: '962. Maximum Width Ramp', d: 'M' }, { t: '1475. Final Prices With a Special Discount in a Shop', d: 'E' }, { t: '1673. Find the Most Competitive Subsequence', d: 'M' }
                ]
            },
            {
                num: 66, name: 'Expression Evaluation', problems: [
                    { t: '150. Evaluate Reverse Polish Notation', d: 'M' }, { t: '224. Basic Calculator', d: 'H' }, { t: '227. Basic Calculator II', d: 'M' }, { t: '772. Basic Calculator III', d: 'H' }
                ]
            },
            {
                num: 67, name: 'Simulation / Backtracking Helper', problems: [
                    { t: '71. Simplify Path', d: 'M' }, { t: '394. Decode String', d: 'M' }, { t: '735. Asteroid Collision', d: 'M' }
                ]
            },
            {
                num: 68, name: 'Min Stack Design', problems: [
                    { t: '155. Min Stack', d: 'M' }, { t: '895. Maximum Frequency Stack', d: 'H' }, { t: '901. Online Stock Span', d: 'M' }
                ]
            },
            {
                num: 69, name: 'Largest Rectangle in Histogram', problems: [
                    { t: '84. Largest Rectangle in Histogram', d: 'H' }, { t: '85. Maximal Rectangle', d: 'H' }
                ]
            },
        ]
    },
    {
        id: 'bit-manipulation',
        title: 'Bit Manipulation Patterns',
        number: 'XI',
        icon: '⚡',
        patterns: [
            {
                num: 70, name: 'Bitwise XOR - Finding Single/Missing Number', problems: [
                    { t: '136. Single Number', d: 'E' }, { t: '137. Single Number II', d: 'M' }, { t: '268. Missing Number', d: 'E' }, { t: '389. Find the Difference', d: 'E' }
                ]
            },
            {
                num: 71, name: 'Bitwise AND - Counting Set Bits (Hamming Weight)', problems: [
                    { t: '191. Number of 1 Bits', d: 'E' }, { t: '231. Power of Two', d: 'E' }, { t: '477. Total Hamming Distance', d: 'M' }
                ]
            },
            {
                num: 72, name: 'Bitwise DP - Counting Bits Optimization', problems: [
                    { t: '338. Counting Bits', d: 'E' }, { t: '1494. Parallel Courses II', d: 'H' }, { t: '1442. Count Triplets That Can Form Two Arrays of Equal XOR', d: 'M' }
                ]
            },
            {
                num: 73, name: 'Bitwise Operations - Power of Two/Four Check', problems: [
                    { t: '231. Power of Two', d: 'E' }, { t: '342. Power of Four', d: 'E' }
                ]
            },
        ]
    },
    {
        id: 'linked-list',
        title: 'Linked List Manipulation Patterns',
        number: 'XII',
        icon: '🔗',
        patterns: [
            {
                num: 74, name: 'In-place Reversal', problems: [
                    { t: '83. Remove Duplicates from Sorted List', d: 'E' }, { t: '92. Reverse Linked List II', d: 'M' }, { t: '206. Reverse Linked List', d: 'E' }, { t: '25. Reverse Nodes in k-Group', d: 'H' }, { t: '234. Palindrome Linked List', d: 'E' }, { t: '82. Remove Duplicates from Sorted List II', d: 'M' }
                ]
            },
            {
                num: 75, name: 'Merging Two Sorted Lists', problems: [
                    { t: '21. Merge Two Sorted Lists', d: 'E' }, { t: '23. Merge k Sorted Lists', d: 'H' }
                ]
            },
            {
                num: 76, name: 'Addition of Numbers', problems: [
                    { t: '2. Add Two Numbers', d: 'M' }, { t: '369. Plus One Linked List', d: 'M' }
                ]
            },
            {
                num: 77, name: 'Intersection Detection', problems: [
                    { t: '160. Intersection of Two Linked Lists', d: 'E' }, { t: '599. Minimum Index Sum of Two Lists', d: 'E' }
                ]
            },
            {
                num: 78, name: 'Reordering / Partitioning', problems: [
                    { t: '24. Swap Nodes in Pairs', d: 'M' }, { t: '61. Rotate List', d: 'M' }, { t: '86. Partition List', d: 'M' }, { t: '143. Reorder List', d: 'M' }, { t: '328. Odd Even Linked List', d: 'M' }
                ]
            },
        ]
    },
    {
        id: 'array-matrix',
        title: 'Array/Matrix Manipulation Patterns',
        number: 'XIII',
        icon: '📊',
        patterns: [
            {
                num: 79, name: 'In-place Rotation', problems: [
                    { t: '48. Rotate Image', d: 'M' }, { t: '189. Rotate Array', d: 'M' }, { t: '867. Transpose Matrix', d: 'E' }
                ]
            },
            {
                num: 80, name: 'Spiral Traversal', problems: [
                    { t: '54. Spiral Matrix', d: 'M' }, { t: '59. Spiral Matrix II', d: 'M' }, { t: '885. Spiral Matrix III', d: 'M' }, { t: '2326. Spiral Matrix IV', d: 'M' }
                ]
            },
            {
                num: 81, name: 'In-place Marking', problems: [
                    { t: '73. Set Matrix Zeroes', d: 'M' }, { t: '289. Game of Life', d: 'M' }, { t: '498. Diagonal Traverse', d: 'M' }
                ]
            },
            {
                num: 82, name: 'Prefix/Suffix Products', problems: [
                    { t: '238. Product of Array Except Self', d: 'M' }, { t: '845. Longest Mountain in Array', d: 'M' }, { t: '2483. Minimum Penalty for a Shop', d: 'M' }
                ]
            },
            {
                num: 83, name: 'Plus One', problems: [
                    { t: '66. Plus One', d: 'E' }, { t: '43. Multiply Strings', d: 'M' }, { t: '989. Add to Array-Form of Integer', d: 'E' }, { t: '67. Add Binary', d: 'E' }
                ]
            },
            {
                num: 84, name: 'In-place from End', problems: [
                    { t: '88. Merge Sorted Array', d: 'E' }, { t: '977. Squares of a Sorted Array', d: 'E' }
                ]
            },
            {
                num: 85, name: 'Cyclic Sort', problems: [
                    { t: '41. First Missing Positive', d: 'H' }, { t: '268. Missing Number', d: 'E' }, { t: '287. Find the Duplicate Number', d: 'M' }, { t: '442. Find All Duplicates in an Array', d: 'M' }, { t: '448. Find All Numbers Disappeared in an Array', d: 'E' }
                ]
            },
        ]
    },
    {
        id: 'string-manipulation',
        title: 'String Manipulation Patterns',
        number: 'XIV',
        icon: '🔤',
        patterns: [
            {
                num: 86, name: 'Palindrome Check', problems: [
                    { t: '9. Palindrome Number', d: 'E' }, { t: '125. Valid Palindrome', d: 'E' }, { t: '680. Valid Palindrome II', d: 'E' }
                ]
            },
            {
                num: 87, name: 'Anagram Check', problems: [
                    { t: '49. Group Anagrams', d: 'M' }, { t: '242. Valid Anagram', d: 'E' }
                ]
            },
            {
                num: 88, name: 'Roman to Integer Conversion', problems: [
                    { t: '13. Roman to Integer', d: 'E' }, { t: '12. Integer to Roman', d: 'M' }
                ]
            },
            {
                num: 89, name: 'String to Integer (atoi)', problems: [
                    { t: '8. String to Integer (atoi)', d: 'M' }, { t: '65. Valid Number', d: 'H' }
                ]
            },
            {
                num: 90, name: 'Manual Simulation', problems: [
                    { t: '43. Multiply Strings', d: 'M' }, { t: '415. Add Strings', d: 'E' }, { t: '67. Add Binary', d: 'E' }
                ]
            },
            {
                num: 91, name: 'String Matching - Naive / KMP / Rabin-Karp', problems: [
                    { t: '28. Find the Index of the First Occurrence in a String', d: 'E' }, { t: '214. Shortest Palindrome', d: 'H' }, { t: '686. Repeated String Match', d: 'M' }, { t: '796. Rotate String', d: 'E' }, { t: '3008. Find Beautiful Indices in the Given Array II', d: 'H' }
                ]
            },
            {
                num: 92, name: 'Repeated Substring Pattern Detection', problems: [
                    { t: '459. Repeated Substring Pattern', d: 'E' }, { t: '28. Find the Index of the First Occurrence in a String', d: 'E' }, { t: '686. Repeated String Match', d: 'M' }
                ]
            },
        ]
    },
    {
        id: 'design',
        title: 'Design Patterns',
        number: 'XV',
        icon: '🏗️',
        patterns: [
            {
                num: 93, name: 'Design (General/Specific)', problems: [
                    { t: '146. LRU Cache', d: 'M' }, { t: '155. Min Stack', d: 'M' }, { t: '225. Implement Stack using Queues', d: 'E' }, { t: '232. Implement Queue using Stacks', d: 'E' }, { t: '251. Flatten 2D Vector', d: 'M' }, { t: '271. Encode and Decode Strings', d: 'M' }, { t: '295. Find Median from Data Stream', d: 'H' }, { t: '341. Flatten Nested List Iterator', d: 'M' }, { t: '346. Moving Average from Data Stream', d: 'E' }, { t: '353. Design Snake Game', d: 'M' }, { t: '359. Logger Rate Limiter', d: 'E' }, { t: '362. Design Hit Counter', d: 'M' }, { t: '379. Design Phone Directory', d: 'M' }, { t: '380. Insert Delete GetRandom O(1)', d: 'M' }, { t: '432. All O`one Data Structure', d: 'H' }, { t: '460. LFU Cache', d: 'H' }, { t: '604. Design Compressed String Iterator', d: 'E' }, { t: '622. Design Circular Queue', d: 'M' }, { t: '641. Design Circular Deque', d: 'M' }, { t: '642. Design Search Autocomplete System', d: 'H' }, { t: '706. Design HashMap', d: 'E' }, { t: '715. Range Module', d: 'H' }, { t: '900. RLE Iterator', d: 'M' }, { t: '981. Time Based Key-Value Store', d: 'M' }, { t: '1146. Snapshot Array', d: 'M' }, { t: '1348. Tweet Counts Per Frequency', d: 'M' }, { t: '1352. Product of the Last K Numbers', d: 'M' }, { t: '1381. Design a Stack With Increment Operation', d: 'M' }, { t: '1756. Design Most Recently Used Queue', d: 'M' }, { t: '2013. Detect Squares', d: 'M' }, { t: '2034. Stock Price Fluctuation', d: 'M' }, { t: '2296. Design a Text Editor', d: 'H' }, { t: '2336. Smallest Number in Infinite Set', d: 'M' }
                ]
            },
            {
                num: 94, name: 'Tries', problems: [
                    { t: '208. Implement Trie (Prefix Tree)', d: 'M' }, { t: '211. Design Add and Search Words Data Structure', d: 'M' }, { t: '720. Longest Word in Dictionary', d: 'M' }, { t: '648. Replace Words', d: 'M' }, { t: '425. Word Squares', d: 'H' }, { t: '642. Design Search Autocomplete System', d: 'H' }, { t: '745. Prefix and Suffix Search', d: 'H' }
                ]
            },
        ]
    }
];

// ===== STATE =====
let solved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
let currentCategory = 'all';

// ===== DOM REFS =====
const mainContent = document.getElementById('mainContent');
const categoryNav = document.getElementById('categoryNav');
const navTrack = categoryNav.querySelector('.nav-track');
const searchInput = document.getElementById('searchInput');
const backToTopBtn = document.getElementById('backToTop');
const progressBar = document.getElementById('progressBar');
const progressRing = document.getElementById('progressRing');
const progressPct = document.getElementById('progressPct');
const solvedCountEl = document.getElementById('solvedCount');
const totalCountEl = document.getElementById('totalCount');

// ===== SVG GRADIENT FOR RING =====
(function addRingGradient() {
    const svg = document.querySelector('.progress-ring');
    if (!svg) return;
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const lg = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    lg.setAttribute('id', 'ringGrad');
    lg.setAttribute('x1', '0%'); lg.setAttribute('y1', '0%');
    lg.setAttribute('x2', '100%'); lg.setAttribute('y2', '100%');
    const s1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    s1.setAttribute('offset', '0%'); s1.setAttribute('stop-color', '#7c6cf0');
    const s2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    s2.setAttribute('offset', '100%'); s2.setAttribute('stop-color', '#06b6d4');
    lg.append(s1, s2); defs.append(lg); svg.prepend(defs);
    progressRing.style.stroke = 'url(#ringGrad)';
})();

// ===== HELPERS =====
function escapeHtml(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function highlightText(text, q) {
    if (!q) return escapeHtml(text);
    const escaped = escapeHtml(text);
    const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return escaped.replace(regex, '<mark>$1</mark>');
}

function getLeetCodeUrl(problemStr) {
    const name = problemStr.replace(/^\d+\.\s*/, '').trim();
    const slug = name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    return `https://leetcode.com/problems/${slug}/`;
}

function parseProblemNumber(str) {
    const m = str.match(/^(\d+)\./);
    return m ? m[1] : '';
}

function problemKey(patternNum, problemText) {
    return `${patternNum}::${problemText}`;
}

function toggleSolved(patternNum, problemText) {
    const key = problemKey(patternNum, problemText);
    if (solved[key]) delete solved[key];
    else solved[key] = 1;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(solved));
    updateProgress();
    // Update specific checkbox and tag visuals
    const checkbox = document.querySelector(`[data-key="${CSS.escape(key)}"]`);
    if (checkbox) {
        checkbox.classList.toggle('checked');
        checkbox.textContent = checkbox.classList.contains('checked') ? '✓' : '';
        checkbox.closest('.problem-tag').classList.toggle('solved');
    }
    // Update card progress bar
    updateCardProgress(patternNum);
}

function updateCardProgress(patternNum) {
    const card = document.querySelector(`[data-pnum="${patternNum}"]`);
    if (!card) return;
    const total = card.querySelectorAll('.problem-tag').length;
    const done = card.querySelectorAll('.problem-tag.solved').length;
    const fill = card.querySelector('.card-progress-fill');
    if (fill) fill.style.width = total > 0 ? (done / total * 100) + '%' : '0%';
    // Update count text
    const countBadge = card.querySelector('.problem-count-badge');
    if (countBadge) {
        const totalProblems = card.querySelectorAll('.problem-tag').length;
        countBadge.textContent = `📝 ${totalProblems} problem${totalProblems !== 1 ? 's' : ''} · ${done} done`;
    }
}

// ===== PROGRESS =====
function updateProgress() {
    let total = 0;
    let done = 0;
    let visiblePatterns = 0;

    DATA.forEach(cat => {
        if (currentCategory !== 'all' && cat.id !== currentCategory) return;
        cat.patterns.forEach(p => {
            visiblePatterns++;
            p.problems.forEach(pr => {
                total++;
                if (solved[problemKey(p.num, pr.t)]) done++;
            });
        });
    });

    const pct = total > 0 ? Math.round(done / total * 100) : 0;

    progressPct.textContent = pct + '%';
    solvedCountEl.textContent = done;
    totalCountEl.textContent = total;

    const patternCountEl = document.getElementById('patternCount');
    if (patternCountEl) patternCountEl.textContent = visiblePatterns;

    const circumference = 2 * Math.PI * 52;
    const offset = circumference - (pct / 100) * circumference;
    progressRing.style.strokeDashoffset = offset;
}

// ===== CATEGORY NAV =====
function initNav() {
    DATA.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'nav-pill';
        btn.dataset.category = cat.id;
        btn.textContent = `${cat.icon} ${cat.title.replace(' Patterns', '').replace(/\(.*\)/, '').trim()}`;
        btn.addEventListener('click', () => {
            currentCategory = cat.id;
            navTrack.querySelectorAll('.nav-pill').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            renderCategories(searchInput.value);
            updateProgress();
            document.getElementById(`cat-${cat.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        navTrack.appendChild(btn);
    });
    navTrack.querySelector('[data-category="all"]').addEventListener('click', () => {
        currentCategory = 'all';
        navTrack.querySelectorAll('.nav-pill').forEach(p => p.classList.remove('active'));
        navTrack.querySelector('[data-category="all"]').classList.add('active');
        renderCategories(searchInput.value);
        updateProgress();
    });
}

// ===== SEARCH =====
searchInput.addEventListener('input', () => renderCategories(searchInput.value));
document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); searchInput.focus(); }
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = ''; searchInput.blur(); renderCategories();
    }
});

// ===== RENDER =====
function renderCategories(query = '') {
    const q = query.toLowerCase().trim();
    let html = '';
    let catIdx = 0;

    DATA.forEach((cat) => {
        if (currentCategory !== 'all' && cat.id !== currentCategory) { catIdx++; return; }

        let filteredPatterns = cat.patterns.filter(p => {
            if (!q) return true;
            if (p.name.toLowerCase().includes(q)) return true;
            if (p.problems.some(prob => prob.t.toLowerCase().includes(q))) return true;
            if (cat.title.toLowerCase().includes(q)) return true;
            return false;
        });

        if (filteredPatterns.length === 0) { catIdx++; return; }

        let categoryProblemCount = 0;
        filteredPatterns.forEach(p => categoryProblemCount += p.problems.length);

        html += `<section class="category-section visible cat-color-${catIdx}" id="cat-${cat.id}" data-category="${cat.id}">
            <div class="category-header"><div class="category-icon">${cat.icon}</div>
            <h2 class="category-title">${cat.number}. ${highlightText(cat.title, q)}</h2>
            <span class="category-count">${filteredPatterns.length} pattern${filteredPatterns.length !== 1 ? 's' : ''} • ${categoryProblemCount} problem${categoryProblemCount !== 1 ? 's' : ''}</span></div>
            <div class="patterns-grid">
            ${filteredPatterns.map(p => {
            const solvedInPattern = p.problems.filter(pr => solved[problemKey(p.num, pr.t)]).length;
            const cardPct = p.problems.length > 0 ? (solvedInPattern / p.problems.length * 100) : 0;

            const filteredProblems = q ? p.problems.filter(pr => pr.t.toLowerCase().includes(q) || p.name.toLowerCase().includes(q) || cat.title.toLowerCase().includes(q)) : p.problems;

            return `<div class="pattern-card" data-pattern="${p.num}" data-pnum="${p.num}">
                    <div class="pattern-card-header" onclick="this.parentElement.classList.toggle('collapsed')">
                        <div class="pattern-card-header-text">
                            <span class="pattern-number">${p.num}</span>
                            <div class="pattern-name">${highlightText(p.name, q)}</div>
                            <span class="problem-count-badge">📝 ${p.problems.length} problem${p.problems.length !== 1 ? 's' : ''} · ${solvedInPattern} done</span>
                        </div>
                        <span class="toggle-arrow">▼</span>
                    </div>
                    <div class="problem-list">
                        ${filteredProblems.map(pr => {
                const num = parseProblemNumber(pr.t);
                const key = problemKey(p.num, pr.t);
                const isSolved = solved[key];
                const diffClass = pr.d === 'E' ? 'easy' : pr.d === 'M' ? 'medium' : 'hard';
                const diffText = pr.d === 'E' ? 'Easy' : pr.d === 'M' ? 'Med' : 'Hard';
                return `<a href="${getLeetCodeUrl(pr.t)}" target="_blank" rel="noopener" class="problem-tag ${isSolved ? 'solved' : ''}" onclick="event.stopPropagation()">
                                <span class="problem-check ${isSolved ? 'checked' : ''}" data-key="${escapeHtml(key)}" onclick="event.preventDefault();event.stopPropagation();toggleSolved(${p.num},'${pr.t.replace(/'/g, "\\'")}');">${isSolved ? '✓' : ''}</span>
                                ${num ? `<span class="problem-num">${num}.</span>` : ''}${highlightText(pr.t.replace(/^\d+\.\s*/, ''), q)}
                                <span class="diff-badge ${diffClass}">${diffText}</span>
                            </a>`;
            }).join('')}
                    </div>
                    <div class="card-progress"><div class="card-progress-fill" style="width:${cardPct}%"></div></div>
                </div>`;
        }).join('')}
            </div></section>`;
        catIdx++;
    });

    if (!html) {
        html = `<div class="no-results"><div class="no-results-icon">🔍</div><h3>No patterns found</h3><p>Try adjusting your search term.</p></div>`;
    }
    mainContent.innerHTML = html;

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.05 });
    document.querySelectorAll('.category-section').forEach(s => observer.observe(s));
}

// ===== SCROLL HANDLERS =====
window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('visible', window.scrollY > 500);
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== CURSOR FOLLOWING RADIANT =====
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.pattern-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width * 100) + '%');
        card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height * 100) + '%');
    });
});

// ===== INIT =====
initNav();
renderCategories();
updateProgress();
