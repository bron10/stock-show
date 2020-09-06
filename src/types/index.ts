import {Stock} from '../store/stock/types'
export type AppProps = { 
    stocks : Array<[Stock]>, 
    isDisconnected : boolean,
    getStockUpdate : () => void
 };

 export type CardProps = {
     stock : Stock
 }

 export type CardListProps = {
    stocks : Array<[Stock]>
}