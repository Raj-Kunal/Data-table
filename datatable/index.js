// import { useState } from 'react'


// import styles from '../styles/Home.module.css'
// import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'


// export default function Datatable({ rows = [] }) {

//     const columns = Object.keys(rows[0])
//     console.log(columns) return name id comapny....
//     console.log(columns[2])  return company
//     const [sortedBy, setSortedBy] = useState({
//         column: columns[1],
//         asc: true,
//     })


//     const [query, setQuery] = useState('');

    

//     const sort = (rows) => {
//         const {column, asc} = sortedBy;
//         return rows.sort((a,b) => {
//             if(a[column].toString() > b[column].toString()) return asc ? -1 : 1;
//             if(b[column].toString() > a[column].toString()) return asc ? 1 : -1;
//             return 0;
//         });
//     }

//     const filter = (rows) => {
//         return rows.filter(row => columns.some(column => row[column].toLowerCase().indexOf(query.toLocaleLowerCase()))) > 1;
//     }

//     const sortFilter = () => sort(filter(rows));
//     return (
//         <div>
//             <div className={styles.input}>
//             <input 
//                 className={styles.search_box}
//                 type="text" 
//                 placeholder='Search...'
//                 value={query} 
//                 onChange={(e) => setQuery(e.target.value)}
//             />
//             </div>
//             <table className={styles.table}>
//             <tr>
//                 {columns.map((column) => (
//                     <th>
//                         <div className={styles.flex} 
//                         onClick={() => 
//                         setSortedBy((prev) => ({
//                             column: column,
//                             asc : !prev.asc
//                         }))
//                     }>
//                             <div>{column}</div>
//                             <div  >
//                                 {sortedBy.column === column && (
//                                     sortedBy.asc 
//                                     ?  <ChevronUpIcon  className={styles.icon} />
//                                     : <ChevronDownIcon className={styles.icon} />
                                   
//                                 )}
//                             </div>
//                         </div>
//                     </th>
//                 ))}
//             </tr>
//             {rows
//             .map((row) => (
//                 <tr>
//                     {columns.map((column) => (
//                         <td>{row[column]}</td>
//                     ))}
//                 </tr>
// ))}
//         </table>
//         </div>
//     )
// }