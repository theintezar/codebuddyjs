<!-- // level {1/2/3}

//level 1 -->


<script>
    const GetData = async()=> {
    try{
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await res.json();
    console.log(data)
    }catch(err){
        console.log(err)
    }
}
GetData();
</script>


