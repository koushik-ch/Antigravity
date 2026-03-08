Here is your back-of-the-envelope cheat sheet. For an L4 loop, the goal of this phase is not to get the exact mathematically perfect answer. The goal is to show the interviewer you can translate abstract user behaviors into physical hardware constraints, and to prove you know when a system requires a cache versus a beefy database cluster.

Memorize these numbers and formulas so you can rattle them off on the whiteboard without hesitation.

---

### 1. The Core Formulas

When estimating scale, always default to a standard day (86,400 seconds) and a standard 5-year runway for storage. Round 86,400 up to 100,000 to make the mental math significantly easier during the interview.

**Queries Per Second (QPS):**


$$QPS = \frac{\text{Daily Active Users} \times \text{Average Requests per User}}{100,000}$$

**Peak QPS:**


$$\text{Peak QPS} = \text{Average QPS} \times 2$$


*(Note: Use a multiplier of 2 as a standard rule of thumb, but adjust to 3 or 4 if the system has massive concentrated spikes, like a live sports streaming app).*

**Storage Requirements:**


$$\text{Total Storage} = \text{Daily New Data} \times 365 \times 5 \text{ Years}$$

**Network Bandwidth:**


$$\text{Bandwidth} = \text{Peak QPS} \times \text{Average Request Size}$$

---

### 2. Powers of 2 & Storage Conversions

You must know how data scales from bytes up to petabytes. Always convert your final storage answers into the highest readable unit.

| Power | Exact Value | Standard Name | Common Abbreviation |
| --- | --- | --- | --- |
| 10 | 1,024 | 1 Kilobyte | 1 KB |
| 20 | 1,048,576 | 1 Megabyte | 1 MB |
| 30 | 1,073,741,824 | 1 Gigabyte | 1 GB |
| 40 | ~10^12 | 1 Terabyte | 1 TB |
| 50 | ~10^15 | 1 Petabyte | 1 PB |

---

### 3. Standard Object Sizes (Rules of Thumb)

If an interviewer does not provide the exact size of a payload, state your assumptions clearly using these standard industry baselines.

* **User/Metadata Record (ID, Name, Email):** ~1 KB
* **Simple Text Message / Tweet:** ~100 to 200 Bytes
* **Standard Image:** ~2 MB
* **Standard Video (per minute):** ~50 MB

---

### 4. Latency Numbers Every Programmer Should Know

This is the most critical table. You need to instantly recognize why reading from a disk is the ultimate bottleneck compared to reading from memory.

| Operation | Latency | Real-World Analogy |
| --- | --- | --- |
| L1 Cache Reference | 0.5 ns | Grabbing a pen on your desk. |
| L2 Cache Reference | 7 ns | Grabbing a book from your shelf. |
| Main Memory (RAM) Read | 100 ns | Walking to the room next door. |
| SSD Random Read | 150,000 ns (150 µs) | Walking down the street. |
| Disk Seek (HDD) | 10,000,000 ns (10 ms) | Flying from New York to London. |
| Read 1 MB sequentially from Network | 10,000,000 ns (10 ms) | Flying from New York to London. |
| Round Trip Time (RTT) - Datacenter | 500,000 ns (0.5 ms) | Driving to the grocery store. |
| Round Trip Time (RTT) - California to Europe | 150,000,000 ns (150 ms) | A literal trip around the globe. |

---

### 5. Availability & SLAs (The "Nines")

High availability is measured in "nines." Be ready to translate an SLA percentage into acceptable downtime per year.

| Availability % | Downtime per Year | Typical System Profile |
| --- | --- | --- |
| 99% (Two Nines) | ~3.65 days | Internal tools, non-critical batch jobs. |
| 99.9% (Three Nines) | ~8.76 hours | Standard consumer web applications. |
| 99.99% (Four Nines) | ~52.6 minutes | E-commerce, payment processing gateways. |
| 99.999% (Five Nines) | ~5.26 minutes | Telecom switches, pacemaker software, Google Search. |

---

With these metrics locked in, the back-of-the-envelope calculation should take no more than 3 to 5 minutes of your 45-minute loop.

Would you like to run a quick 5-minute mock estimation drill right now for a system like Twitter or WhatsApp to practice applying these formulas?