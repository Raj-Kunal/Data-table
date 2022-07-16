import React, { useState } from 'react'
import styles from '../styles/Home.module.css'


const Table = ({ dataKeys, data, query }) => {

  const [start, setStart] = useState(0)
  const [count, setCount] = useState(10)
  const [pageNumber, setPageNumber] = useState(0)

  const userPerPage = 12;
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
          (
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
          (
            <div className={styles.btnContainer}>
              <div>
                <button className={styles.btn} onClick={() => setPageNumber((prev) => {
                  return (
                    prev !== 0 ? (prev - 1) : (prev = totalPage - 1)
                  )
                })}>prev</button>
              </div>
              <div className={styles.info}>{`${pageNumber + 1} of ${totalPage}`}</div>
              <div>
                <button className={styles.btn} onClick={() => setPageNumber((prev) => {
                  return (
                    prev !== totalPage - 1 ? (prev + 1) : (prev = 0)
                  )
                })}>next</button>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default Table



