<script>
	// JavaScript program for implementation of RR scheduling

	// Function to find the waiting time for all
	// processes
	const findWaitingTime = (processes, n, bt, wt, quantum) => {
		// Make a copy of burst times bt[] to store remaining
		// burst times.
		let rem_bt = new Array(n).fill(0);
		for (let i = 0; i < n; i++)
			rem_bt[i] = bt[i];

		let t = 0; // Current time

		// Keep traversing processes in round robin manner
		// until all of them are not done.
		while (1) {
			let done = true;

			// Traverse all processes one by one repeatedly
			for (let i = 0; i < n; i++) {
				// If burst time of a process is greater than 0
				// then only need to process further
				if (rem_bt[i] > 0) {
					done = false; // There is a pending process

				

					// If burst time is smaller than or equal to
					// quantum. Last cycle for this process
					else {
						// Increase the value of t i.e. shows
						// how much time a process has been processed
						t = t + rem_bt[i];

						// Waiting time is current time minus time
						// used by this process
						wt[i] = t - bt[i];

						// As the process gets fully executed
						// make its remaining burst time = 0
						rem_bt[i] = 0;
					}
				}
			}

			// If all processes are done
			if (done == true)
				break;
		}
	}

	// Function to calculate turn around time
	const findTurnAroundTime = (processes, n, bt, wt, tat) => {
		// calculating turnaround time by adding
		// bt[i] + wt[i]
		for (let i = 0; i < n; i++)
			tat[i] = bt[i] + wt[i];
	}

	// Function to calculate average time
	const findavgTime = (processes, n, bt, quantum) => {
		let wt = new Array(n).fill(0), tat = new Array(n).fill(0);
		let total_wt = 0, total_tat = 0;

		// Function to find waiting time of all processes
		findWaitingTime(processes, n, bt, wt, quantum);

		// Function to find turn around time for all processes
		findTurnAroundTime(processes, n, bt, wt, tat);

		// Display processes along with all details
		document.write(`Processes Burst time Waiting time Turn around time in nanoSeconds<br/>`);

		// Calculate total waiting time and total turn
		// around time
		for (let i = 0; i < n; i++) {
			total_wt = total_wt + wt[i];
			total_tat = total_tat + tat[i];

			document.write(`${i + 1} ${bt[i]} ${wt[i]} ${tat[i]}<br/>`);
		}

		document.write(`Average waiting time in nanoSeconds= ${total_wt / n}`);
		document.write(`<br/>Average turn around time in nanoSeconds= ${total_tat / n}`);
	}

	// Driver code
	// process id's
	

	// Time quantum
	let quantum = 2;
	findavgTime(processes, n, burst_time, quantum);

	// This code is contributed by rakeshsahni

</script>
