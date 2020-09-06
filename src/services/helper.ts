/**
 * 
 * @param currentStocks current formatted stock data
 * @param updatedStocks incoming stock data that needs to be formatted 
 */
export function formatStockData(currentStocks:any){
    let allStocks:any = currentStocks;
    return (updatedStocks:any) => {
      updatedStocks.map((uStock:any) => {
        let presentIndex= 0;
        // console.log("currentStocks", currentStocks);
        const presentStock = currentStocks.find((cStock:any, index:number) => {
            if(cStock.name === uStock[0]){
                presentIndex = index;
                return cStock;
            }
        });
        let indexValue = uStock[1].toFixed(2);
        if(presentStock){
            let status = 0;
            if(presentStock.index < uStock[1] ){
                status = 1;
            }
            //presentStock.history.push(indexValue)
            allStocks[presentIndex] = {
                name : presentStock.name,
                status,
                //history : presentStock.history,
                index : indexValue,
                rawDate : Date.now(), 
                updatedAt : getTimeInterval(presentStock.rawDate)
            }
        }else{
            allStocks.push({
                name : uStock[0],
                status : NaN,
                //history : [indexValue],
                index : indexValue,
                rawDate : Date.now(), 
                updatedAt : getTimeInterval(Date.now())
            })
        }
        return uStock;  
      })
      return allStocks;
    }
}


function getTimeInterval(date:number) {
    let seconds = Math.floor((Date.now() - date) / 1000);
    let unit = "second";
    let direction = "ago";
    if (seconds < 0) {
      seconds = -seconds;
      direction = "from now";
    }
    let value = seconds;
    if (seconds >= 31536000) {
      value = Math.floor(seconds / 31536000);
      unit = "year";
    } else if (seconds >= 86400) {
      value = Math.floor(seconds / 86400);
      unit = "day";
    } else if (seconds >= 3600) {
      value = Math.floor(seconds / 3600);
      unit = "hour";
    } else if (seconds >= 60) {
      value = Math.floor(seconds / 60);
      unit = "minute";
    }
    if (value !== 1)
      unit = unit + "s";
    return value + " " + unit + " " + direction;
  }