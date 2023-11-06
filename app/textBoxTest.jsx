// Assuming you have captured the inputValue as shown earlier
const inputValue = document.getElementById("testInput").value;

// Create a Blob with the text data
const blob = new Blob([inputValue], { type: "text/plain" });

// Generate a downloadable link for the text file
const blobUrl = window.URL.createObjectURL(blob);

const a = document.createElement("a");
a.href = blobUrl;
a.download = "output.txt"; // Filename for the downloaded file

// Trigger a click event to prompt the user to download the file
a.click();

// Clean up resources
window.URL.revokeObjectURL(blobUrl);
