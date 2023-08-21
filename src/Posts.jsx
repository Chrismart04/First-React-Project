export function Posts() {
  return (
    <button
      onClick={async () => {
       try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
       } catch(error){
        console.error('error:', error)
       }
      }}
    >
      traer datos
    </button>
  );
}


