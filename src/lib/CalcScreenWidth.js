const calcScreenWidth = {
  screenWidth: 0,
  listeners: [],

  // Method to intiialize screen width tracking
  initialize() {
    this.updateWidth();
    // Add event listener for window resize
    window.addEventListener("resize", this.updateWidth.bind(this));
  },

  // Method to update the screen width and notify the listeneres
  updateWidth() {
    this.screenWidth = window.innerWidth;
    this.notifyListeners();
  },

  // Method to add a listener for changes
  subscribe(callback) {
    this.listeners.push(callback);

    // Call the callback immediately with the current width
    callback(this.screenWidthwidth);

    // Return a function to unsubscirbe
    return () => {
      this.listeners = this.listeners.filter(
        (listener) => listener !== callback
      );
    };
  },

  // Notify all listeners about the change
  notifyListeners() {
    this.listeners.forEach((listnener) => listnener(this.screenWidth));
  },
};

export default calcScreenWidth;
