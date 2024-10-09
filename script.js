let count = 0;
/*this function will update the display of the counter.*/
        function updateDisplay()
        /*Inside the updateDisplay function, this line accesses a DOM element 
        with the ID of counter using document.getElementById(). 
        It then updates the text content of that element by setting its innerText property
         to the current value of count.*/
         {
            document.getElementById('counter').innerText = count;
        }
        /*This function will increase the count variable by 1 count++ */
        function increment() {
            count++;
            /*After incrementing count, this line calls the updateDisplay function,
             so the new value of count is displayed on the webpage */
            updateDisplay();
        }
        /*this function will decrease the value of count*/
        function decrement() {
            count--;
            updateDisplay(); }
        /*This function will reset the count variable back to zero.*/
        function reset() {
            count = 0;
            updateDisplay();
        }