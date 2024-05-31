// MEyveleri oluşturup listelediğim sayfa

import { TableWrapperTypes, FruitOrVeggies } from "./types"

export const FruitsTable = ({ inputValue, isThere }: TableWrapperTypes) => {
    const fruits: FruitOrVeggies = [
        { id: 1, name: "Karpuz", price: "9", category: "Fruit", stock: false },
        { id: 2, name: "Erik", price: "20", category: "Fruit", stock: true },
        { id: 3, name: "Vişne", price: "35", category: "Fruit", stock: false },
        { id: 4, name: "Şeftali", price: "25", category: "Fruit", stock: false },
        { id: 5, name: "Çilek", price: "35", category: "Fruit", stock: true },
    ]


    return (

        <>
            <div>
                <ul>
                    <h2 style={{ textAlign: "center" }}>FRUITS</h2>
                    <h5>Kg Fiyatı</h5>

                    {fruits.filter((fruit) => {
                        const matchesName = fruit.name.toLowerCase().includes(inputValue.toLowerCase());
                        const matchesStock = !isThere || fruit.stock;
                        return matchesName && matchesStock;
                    }).map((fruit) => (
                        <li key={fruit.id} style={{ textAlign: "center" }}>
                            {`${fruit.name} - ${fruit.price} ₺`}
                        </li>
                    ))
                    }



                </ul>
            </div>
        </>

    )
}