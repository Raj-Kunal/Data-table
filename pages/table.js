import React, { useState } from 'react'
import styles from '../styles/Home.module.css'


const Table = ({ dataKeys, data, query }) => {

  const [start, setStart] = useState(0)
  const [count, setCount] = useState(10)
  const [pageNumber, setPageNumber] = useState(0)

  const userPerPage = 10;
  const pagesVisited = pageNumber * userPerPage;
  const displayUsers = data?.slice(pagesVisited, userPerPage + pagesVisited)
  // console.log(displayUsers)
  const totalPage = Math.ceil(data?.length / userPerPage)
  // console.log(totalPage)


  

  if (!(data?.length)) {
    return (
      <p>No Data Found</p>
    )
  }
  else if (query != "") {
    return (
      <div>
        <table className={styles.table}>    
          <thead>
          <tr>
          {(dataKeys).map((data, index) => {
              return <th key={index}>{data}</th>
            })}
          </tr>
           </thead>
           <tbody>
            {(data)?.slice(start, count).map((item, id) => (
              <tr className={styles.row} key={id}>
                {(Object.keys(item)).map((data, index) => (
                  <td key={index}>{item[data]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {
          data.length > count && (
            <div className={styles.btnContainer}>
              <div>
                <button className={styles.btn} 
                onClick={() => {
                  setStart(prev => prev - 10);
                  setCount(prev => prev - 10);
                  
                }}>prev</button>
              </div>
              <div>
                <button className={styles.btn} onClick={() => {
                  setStart(prev => prev + 10);
                  setCount(prev => prev + 10);
                  
                }}>next</button>
              </div>
            </div>
          )
        }
      </div>
    )

  }

  else {
    return (
      <div>
        <table className={styles.table}>         
           <thead>
          <tr>
          {(dataKeys).map((data, index) => {
              return <th key={index}>{data}</th>
            })}
          </tr>
           </thead>
           <tbody>
            {(displayUsers).map((item, id) => (
              <tr className={styles.row} key={id}>
                {(Object.keys(item)).map((data, index) => (
                  <td key={index}>{item[data]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {
          data?.length - pagesVisited > userPerPage && (
            <div className={styles.btnContainer}>
              <div>
                <button className={styles.btn} onClick={() => setPageNumber(prev => prev - 1)}>prev</button>
              </div>
              <div>
                <button className={styles.btn} onClick={() => setPageNumber(prev => prev + 1)}>next</button>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default Table


//       <table>
//   <thead>
//     <tr>
//       <th>name</th>
//       <th>age</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>john</td>
//       <td>33</td>
//     </tr>
//     <tr>
//       <td>smith</td>
//       <td>22</td>
//     </tr>
//     <tr>
//       <td>jane</td>
//       <td>24</td>
//     </tr>
//   </tbody>
// </table>


{/* <div>
        <table className={styles.table}>
          <tbody>
              {(dataKeys).map((data, index) => {
                return <th key={index}>{data}</th>
              })}
  
              {(data).slice(0, count).map((item, id) => (
                <tr key={id}>
                    {(Object.keys(item)).map((data, index) => (
                      <td key={index}>{item[data]}</td>
                    ))}
                  </tr>
              ))}
          </tbody>
        </table>
       {
        data.length > count && (
          <div>
          <div>
          <button onClick={() => setCount(prev => prev + 15)}>next</button>
        </div>
        <div>
          <button onClick={() => setCount(prev => prev - 15)}>prev</button>
        </div>
        </div>
        )
       }
      </div> */}



