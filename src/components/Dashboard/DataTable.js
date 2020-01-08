import React, { useState, useRef } from "react";
import styled from 'styled-components';
import './DataTable.css';
// import { useSelector } from 'react-redux';


/// Styling ///

//I had to use some vanilla css styles because styled components wasn't passing events.

const HeaderCell = styled.th`
    background: #1A2247;
    width: 150ps;
    height: 40px;
    color: #ECEEF7;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    line-height: 38px;
    padding-left: 40px;
`

const HeaderInput = styled.input`
    background: #1A2247;
    width: 100%;
    height: 40px;
    color: #ECEEF7;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    line-height: 38px;
    border: none;
    &::placeholder {
        color: #ECEEF7;
        opacity: 1;
    }
    &:-ms-input-placeholder {
        color: #ECEEF7;
    }
    &::-ms-input-placeholder {
        color: #ECEEF7;
    }
    &:hover + .DeleteDataSetButton {
        display: inline-block;
    }
`

const HeaderCellTD = styled.td`
    background: #1A2247;
    width: 150ps;
    height: 40px;
`

const DeleteDataSetButton = styled.button`
    display: none;
    position: absolute;
    background-color: #FF5252;
    border: none;
    color: white;
    font-weight: 600;
    border-radius: 50%;
    text-align: center;
    text-decoration: none;
    outline: none;
    margin-top: -5px;
    margin-left: -40px;
    box-shadow: -2px 1px 2px 0px rgba(0,0,0,0.6);
    &:hover {
        display: inline-block;
    }
`

const DeleteCategoryButton = styled.button`
    display: none;
    background-color: #FF5252;
    border: none;
    color: white;
    font-weight: 600;
    border-radius: 50%;
    text-align: center;
    text-decoration: none;
    outline: none;
    margin-left: -10px;
    box-shadow: -2px 1px 2px 0px rgba(0,0,0,0.3);
    &:hover {
        display: inline-block;
    }
`

const TableRow = styled.tr`
    background: white;
    font-size: 14px;
    font-weight: normal;
    line-height: 38px;
    border-bottom: 1px solid #D4D4D4;
    &:hover \ .DeleteCategoryButton {
        display: inline-block;
    }  
`

const HeaderAddButtonContainer = styled.td`
    background: #1A2247;
`

const AddNewDataSetButton = styled.button`
    border: none;
    background-color: transparent;
    outline:none;
    color: #ECEEF7;
    font-size: 28px;
    font-weight: 600;
    padding: 0;
    margin: 0;
    line-height: 1;
`

const AddNewCategoryButton = styled.button`
    border: none;
    background-color: transparent;
    outline:none;
    color: #4054B2;
    font-size: 36px;
    font-weight: 600;
    line-height: 1;
    padding-bottom: 10px;
`

/// Exported Function ///

const DataTable = () => {
    const categoryInputRef = useRef('');
    // const spider = useSelector(state => state.openedSpiders[state.currentSpider]);
    // console.log(spider);

    const [dummy, setDummy] = useState(0);
    /// The design tab gets and modifies data from an array of arrays.         ///
    /// Every array within the containing array represents a ROW on the table. ///
    /// That means the data that goes along with each data-set will be in a    ///
    /// different array with the same index as the data-set header.            ///
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

    //Code can be added here to counter vulnerability to negative or floating numbers.
    function changeDataSetValue(e) {
        data[e.target.getAttribute('index1')][e.target.getAttribute('index2')] = e.target.value;
        setData(data);
    }

    //This function prevents the user from inputing negative or decimal numbers.
    //There is still vulnerability to pasting decimal and negative numbers, though.
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
        <div className='data-table-container'> {dummy}
            <table className='data-table'>
                <thead>
                    <tr>
                        {data[0].map((item, i) => {
                            if (i === 0) {
                                return (
                                    <HeaderCell key={i+1}>{item}</HeaderCell>
                                );
                            }
                            return (
                                // TODO make sure placeholder and value appear the same.
                                <HeaderCellTD key={i+1}>
                                    <HeaderInput index={i} type='text' name={item} onChange={changeDataSetName} placeholder={data[0][i]} />
                                    <DeleteDataSetButton className='DeleteDataSetButton' index={i} onClick={removeDataSet}>X</DeleteDataSetButton>
                                </HeaderCellTD>
                            );
                        })}
                        {/* TODO Add functionality that will only allow a max number of datasets */}
                        <HeaderAddButtonContainer>
                            <AddNewDataSetButton onClick={addNewDataSet}>+</AddNewDataSetButton>
                        </HeaderAddButtonContainer>
                    </tr>
                </thead>
                <tbody>
                {data.map((arr, i) => {
                    if (i > 0) {
                        return (
                            <TableRow key={i+1}>
                                {arr.map((cell, j) => {
                                    if (j === 0) {
                                        return (
                                            <td key={(i+1) * j}>
                                                <input className='category-input' ref={categoryInputRef} index={i} type='text' name={cell} onChange={changeCategoryName} placeholder={data[i][j]} />
                                            </td>
                                        );
                                    }
                                    return (
                                        <td key={(i+1) * j}>
                                            {/* TODO: Add validation to ensure only positive integers */}
                                            <input className='data-field' index1={i} index2={j} type='number' name={data[0][j] + data[i][0]} onChange={changeDataSetValue} placeholder={data[i][j]} pattern=" 0+\.[0-9]*[1-9][0-9]*$" onKeyDown={allowOnlyNumberKeys} />
                                        </td>
                                    );
                                })}
                                {/* TODO: When styling, display none until on hover */}
                                <td><DeleteCategoryButton className='DeleteCategoryButton' index={i} onClick={removeCategory}>X</DeleteCategoryButton></td>
                            </TableRow>
                        );
                    }
                    return false;
                })}
                </tbody>
            </table>
            {/* TODO Add functionality that will only allow a max number of categories */}
            <div className='add-new-category-button-container'>
                <AddNewCategoryButton onClick={addNewCategory}>+</AddNewCategoryButton>
                <span>Entry</span>
            </div>
        </div>
    );
}

export default DataTable;