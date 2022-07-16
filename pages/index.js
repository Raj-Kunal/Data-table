import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import people from './data/data.json'
import Table from './table'

export default function Home() {
  const [query, setQuery] = useState('');
  const keys = ["_id", "name", "company", "email", "phone", "address"];

  const search = (data) => {
    const filterData = data.filter(function (item) {
      let dataFoundStatus = false;

      Object.keys(item).map(key => {
        if ((item[key].toLowerCase()).includes(query.toLocaleLowerCase())) { dataFoundStatus = true }
      })
      return ((dataFoundStatus) && (item))
    })

    const sortedFilterData = filterData.sort((a, b) => ((a.name).toLowerCase() > (b.name).toLowerCase()) ? 1 : -1)
    return (sortedFilterData);
  }

  return (
    <div className={styles.maincontainer}>
      <div className={styles.heading}><h1>DATA-TABLE</h1></div>
      <div className={styles.container}>
        <div className={styles.input}>
          <input
            className={styles.search_box}
            type="text"
            placeholder='Search...'
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
        </div>
        <div className={styles.table_container}>
          <Table dataKeys={keys} data={search(people)} query={query} />
        </div>
      </div>
    </div>
  )
}