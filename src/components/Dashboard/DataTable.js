import React, { useState } from "react";

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
    function removeCategory(e) {
        const newData = data;
        newData.splice(e.target.getAttribute('index'), 1);
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

    function removeDataSet(e) {
        const newData = data.map(arr => {
            arr.splice(e.target.getAttribute('index'), 1);
            return arr;
        });
        setData(newData);
    }

    function changeDataSetName(e) {
        data[0][e.target.getAttribute('index')] = e.target.value;
        setData(data);
    }

    function changeCategoryName(e) {
        data[e.target.getAttribute('index')][0] = e.target.value;
        setData(data);
    }

    function changeDataSetValue(e) {
        data[e.target.getAttribute('index1')][e.target.getAttribute('index2')] = e.target.value;
        setData(data);
    }

    function allowOnlyNumberKeys(e) {
        if ((e.keyCode > 47) && (e.keyCode < 58) || e.keyCode === 8 || (e.keyCode > 95 && e.keyCode < 106)) {
            return true;
        } else {
            e.preventDefault();
            return false;
        }
    }

    return (
        // This dummy number has to be hidden if left in the final build.
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
                                // TODO make sure placeholder and value appear the same.
                                <td key={i+1}>
                                    <input index={i} type='text' name={item} onChange={changeDataSetName} placeholder={data[0][i]} />
                                    <button index={i} onClick={removeDataSet}>x</button>
                                </td>
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
                                {arr.map((cell, j) => {
                                    if (j === 0) {
                                        return (
                                            <td key={(i+1) * j}>
                                                <input index={i} type='text' name={cell} onChange={changeCategoryName} placeholder={data[i][j]} />
                                            </td>
                                        );
                                    }
                                    return (
                                        <td key={(i+1) * j}>
                                            {/* TODO: Add validation to ensure only positive integers */}
                                            <input index1={i} index2={j} type='number' name={data[0][j] + data[i][0]} onChange={changeDataSetValue} placeholder={data[i][j]} pattern=" 0+\.[0-9]*[1-9][0-9]*$" onKeyDown={allowOnlyNumberKeys} />
                                        </td>
                                    );
                                })}
                                {/* TODO: When styling, display none until on hover */}
                                <td><button index={i} onClick={removeCategory}>-</button></td>
                            </tr>
                        );
                    }
                    return false;
                })}
                </tbody>
            </table>
            {/* TODO Add functionality that will only allow a max number of categories */}
            <button onClick={addNewCategory}>+ New Category</button>
        </div>
    );
}

export default DataTable;