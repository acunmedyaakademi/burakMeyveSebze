// Sebzeleri oluşturup listelediğim sayfa.

import { FruitOrVeggy, TableWrapperTypes } from "./types"

export const Vegetables = ({ inputValue, isThere }: TableWrapperTypes) => {
    const veggies: FruitOrVeggy = [
        { id: 1, name: "Ispanak", price: "45", category: "Veggie", stock: true },
        { id: 2, name: "Mercimek", price: "20", category: "Veggie", stock: false },
        { id: 3, name: "Domates", price: "15", category: "Veggie", stock: true },
        { id: 4, name: "Kabak", price: "20", category: "Veggie", stock: false },
        { id: 5, name: "Turp", price: "35", category: "Veggie", stock: true },
    ]

    return (

        <>

            <div>
                <ul>
                    <h2>VEGITABLES</h2>
                    <h5>Kg Fiyatı</h5>

                    {veggies.filter((veggie) => {
                        const input = veggie.name.toLowerCase().includes(inputValue.toLowerCase());
                        const checkbox = !isThere || veggie.stock;
                        return input && checkbox;
                    }).map((veggie) => {
                        if (veggie.name.toLowerCase().includes(inputValue.toLowerCase()))
                            return (
                                <li key={veggie.id}>{`
                                ${veggie.name}- ${veggie.price}₺
                                `
                                }
                                </li>
                            )

                    })

                    }
                </ul>
            </div>

        </>

    )
}