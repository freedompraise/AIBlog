
const clearLocalStorage = () => {
    if (!localStorage.getItem("timestamp")) {
        localStorage.setItem("timestamp", new Date().getTime());
    } // Set the timestamp if it doesn't exist
    const timestamp = localStorage.getItem("timestamp");
    const now = new Date().getTime();
    const timeDifference = now - timestamp;
    const minutesDifference = timeDifference / 60000;
    if (minutesDifference > 5) {
        localStorage.clear();
    } // Clear local storage if the difference is greater than 5 minutes
}
export default clearLocalStorage;

                
