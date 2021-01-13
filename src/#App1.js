import React,{ useState,useEffect } from "react";



function App() {
  const [repo,setRepo] = useState([
  /*   {   id:1,name:'repo-1' },
    {   id:2,name:'repo-2' },
    {   id:3,name:'repo-3' } */
  ]);

  useEffect(async()=>{
    const response = await fetch('https://api.github.com/users/alalbuquerque22/repos')
    const data = await response.json();

    setRepo(data);
  },[])

  useEffect(()=>{
    const filtered = repo.filter(repo=> repo.favorite);
    document.title =`Voce tem ${filtered.length} repositorios favoritados`
  },[repo])

  function handleAddFavorite(id){
    const newRepositories = repo.map(repo =>{
      return repo.id === id ? {...repo,favorite:!repo.favorite}: repo
    });
    setRepo(newRepositories)
  }

/*   function handleAddRepository (){
    setRepo([...repo,{id:Math.random(), name: "Novo repo"}])
  } */
  return (
    <>
    <ul>
      {repo.map(repo => <li key={repo.id}>
        {repo.name}
        {repo.favorite && <span>(Favortito)</span>}
        
        <button onClick={()=>{handleAddFavorite(repo.id)}}>Favoritar</button></li>)}
    </ul>

  {/*   <button onClick={handleAddRepository}>
      Adicionar um Repositorio
    </button> */}
    </>
  );
}

export default App;
