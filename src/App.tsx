import {  useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import CardUsers from './components/CardUsers'
import Paginations from './components/paginations'
import {faker} from '@faker-js/faker'
import { users } from './utils/interfaces/users'

const usersData: Array<users> = []

const createRandomUsers = () :users => {
  return {
    userId:faker.datatype.uuid(),
    username:faker.internet.userName(),
    email:faker.internet.email(),
    avatar:{
      alt:'Avatar',
      url: faker.image.avatar(),
    },
    birthdate:faker.date.birthdate(),
    registeredAt:faker.date.past()
  }
}

Array.from({length:100}).forEach(() => {
  usersData.push(createRandomUsers())
})

function App() {
    const [page, setPage] = useState(1)
    const limit = 10

   const totalPage = Math.ceil(usersData.length / limit)

   const userShow = usersData.slice((page - 1) * limit, limit * page)
    
   const selectPage = (params:number|string) => {
      setPage(Number(params))
    }

    const firstPage = () => {
      setPage(1)
    }

    const lastPage = () => {
      setPage(totalPage)
    }

    const prevPage= () => {
      if(page === 4){
        setPage(page-3)
      }else if(page === 3){
        setPage(page-2)
      }else if(page === 2){
        setPage(page-1)
      }   
      else if(page === 1){
        setPage(1)
      }else{
        setPage(page-3)
      }
    }

    const nextPage = () => {
      if(page === totalPage - 1){
        setPage(page+1)
     }else if(page < totalPage){
        setPage(page+2)
     }
    }

  return (
    <div className="App">
    <Navbar />
      
      <div className='card-component'>
          {userShow.map((data, idx) =>(
            <CardUsers userId={data.userId} email={data.email} username={data.username} avatar={data.avatar} birthdate={data.birthdate} registeredAt={data.registeredAt} key={idx}  />
          ))}
      </div>

      <Paginations
      page={page}
      totalPage={totalPage}
      selectPage={selectPage}
      prevPage={prevPage}
      nextPage={nextPage}
      firstPage={firstPage}
      lastPage={lastPage}
      />
    </div>
  )
}

export default App
