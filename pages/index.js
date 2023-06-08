

import Header from '@/components/header/Header'
import  Main  from '@/components/main/Main'
import ImageList from '@/components/imageList/ImageList'



export default function Home() {
  return (
    <>
<header>
  <Header />
</header>
  
    <main>
      <Main />
      <ImageList />
    </main>
    </>
  )
}
