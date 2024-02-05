interface Recipe {
    title: string;
    image: string;
    time: number;
    description: string;
    vegan: boolean;
    id: string;
}

const getRecipes = async (): Promise<Recipe[]> =>{
    const result = await fetch('http://localhost:4000/recipes')

    return result.json()
}

const Home = () => {
  return (
    <main>
        <h1>Hello</h1>
    </main>
  )
}

export default Home