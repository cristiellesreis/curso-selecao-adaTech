const minhaLista = [
    {id: '1', value: 'Frutas'},
    {id: '2', value: 'Verduras'},
    {id: '3', value: 'Carne'}
]

export default function MinhaLista() {
    return minhaLista.map((item) => {
        return(
            <div key = {item.id}>
                <h4>{item.value}</h4>
            </div>
        )
    })
}