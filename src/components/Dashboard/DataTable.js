import React, { useState, useEffect } from "react";

const DataTable = () => {
    const [dummy, setDummy] = useState(0);
    const [data, setData] = useState([
        ['Categories', 'DataSet1'],
        ['Category1', 5],
        ['Category2', 5],
        ['Category3', 5],
        ['Category4', 5],
        ['Category5', 5]
    ]);

    function addNewCategory() {
        let newCategory = ['Category'];
        data[1].forEach((col, i) => {
            if (i > 0) {
                newCategory.push(5);
            }
        })
        setData(data => [...data, newCategory]);
    }

    //this function is not calling a rerender when chaging state
    function removeCategory(index) {
        const newData = data;
        newData.splice(index, 1);
        setData(newData);
        //this is a temp solution. Changing this state is calling a rerender
        setDummy(dummy + 1);
    } 

    function addNewDataSet() {
        const newData = data.map((arr, i) => {
            if (i === 0) {
                return [...arr, 'DataSet'];
            }
            return [...arr, 5]
        })
        setData(newData);
    }

    return (
        <div> {dummy}
            <table>
                <thead>
                    <tr>
                        {data[0].map((item, i) => {
                            if (i === 0) {
                                return (
                                    <th key={i+1}>{item}</th>
                                );
                            }
                            return (
                                <td key={i+1}>{item}<button>x</button></td>
                            );
                        })}
                        {/* TODO Add functionality that will only allow a max number of datasets */}
                        <td><button onClick={addNewDataSet}>+</button></td>
                    </tr>
                </thead>
                <tbody>
                {data.map((arr, i) => {
                    if (i > 0) {
                        return (
                            <tr key={i+1}>
                                {arr.map((cell, j) => (<td key={(i+1) * j}>{cell}</td>))}
                                {/* TODO: When styling, display none until on hover */}
                                <td><button index={i} onClick={() => removeCategory(i)}>-</button></td>
                            </tr>
                        );
                    }
                })}
                </tbody>
            </table>
            {/* TODO Add functionality that will only allow a max number of categories */}
            <button onClick={addNewCategory}>+ New Category</button>
        </div>
    );
}

export default DataTable;