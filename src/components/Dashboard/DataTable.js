import React, { useState, useRef, useEffect } from "react";
import styled from 'styled-components';
import './DataTable.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from 'states/spider-graph';
import act from 'states/act';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

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
        opacity: 1;
    }
`

const HeaderCellTD = styled.td`
    background: #1A2247;
    width: 150ps;
    height: 40px;
`

const TableRow = styled.tr`
    font-size: 14px;
    background: white;
    font-weight: normal;
    line-height: 38px;
    border-bottom: 1px solid #D4D4D4;
    &:hover \ .DeleteCategoryButton {
        opacity: 1;
    } 
`

const HeaderAddButtonContainer = styled.td`
    background: #1A2247;
    width: 36px;
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
    const currentSpider = useSelector(state => state.currentSpider);
    const spider = useSelector(state => state.openedSpiders[currentSpider]);
    const firstEntry = useSelector(state => state.openedSpiders[currentSpider].datasets[0].data[0])
    const dispatch = useDispatch();

    let convertedData = [['Categories']];

    spider.labels.forEach((label, i) => {
        convertedData.push([label]);
    });

    spider.datasets.forEach((dSObj, i) => {
        convertedData[0][i + 1] = dSObj.label;
        dSObj.data.forEach((val, j) => {
            convertedData[j + 1][i + 1] = val;
        });
    });

    // const [dummy, setDummy] = useState(0);
    /// The design tab gets and modifies data from an array of arrays.         ///
    /// Every array within the containing array represents a ROW on the table. ///
    /// That means the data that goes along with each data-set will be in a    ///
    /// different array with the same index as the data-set header.            ///
    const [data, setData] = useState(convertedData);

    useEffect(() => {    
        let convertedData = [['Categories']];

        spider.labels.forEach((label, i) => {
            convertedData.push([label]);
        });

        spider.datasets.forEach((dSObj, i) => {
            convertedData[0][i + 1] = dSObj.label;
            dSObj.data.forEach((val, j) => {
                convertedData[j + 1][i + 1] = val;
            });
        });

        setData(convertedData);
        // console.log('GOT NEW SPIDER');
        // console.log(spider.datasets[0].data[0])
        // console.log(convertedData)
    }, [spider])

    // console.log('rerender with data: ');
    // console.log(data);

    function addNewCategory() {
        dispatch(act(actions.ADD_GRAPH_ARM));
    }

    function removeCategory(e) {
        const labelToDelete = parseInt(e.target.getAttribute('index')) - 1;
        dispatch(act(actions.DELETE_GRAPH_ARM, labelToDelete));
    }

    //Add functionality to prevent the removal of the last dataset.
    function addNewDataSet() {
        dispatch(act(actions.ADD_GRAPH_DATASET));
    }

    function removeDataSet(e) {
        const datasetToDelete = parseInt(e.target.getAttribute('index')) - 1;
        dispatch(act(actions.DELETE_GRAPH_DATASET, datasetToDelete))
    }

    function changeCategoryName(e) {
        const catagoryIndex = e.target.getAttribute('index') - 1;
        dispatch(act(actions.EDIT_GRAPH_ARM, { index: catagoryIndex, newName: e.target.value }))
    }

    function changeDataSetName(e, i) {
        const datasetIndex = i - 1;
        dispatch(act(actions.EDIT_GRAPH_DATASET, { index: datasetIndex, newName: e.target.value }))
    }

    //Code can be added here to counter vulnerability to negative or floating numbers.
    function changeDataSetValue(e) {
        const categoryIndex = e.target.getAttribute('index1') - 1;
        const datasetIndex = e.target.getAttribute('index2') - 1;
        const newValue = parseInt(e.target.value);

        dispatch(act(actions.EDIT_GRAPH_DATAPOINT, { datasetIndex: datasetIndex, categoryIndex: categoryIndex, newValue: newValue }))
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
        <>
            {/* The following line of code is for debugging purposes: */}
            {/* <p>current spider: {currentSpider}, first entry: {firstEntry}</p> */}
            <div className='data-table-container'>
                <table className='data-table'>
                    <thead>
                        <tr>
                            {/* {spider.datasets.length} */}
                            {data[0].map((item, i) => {
                                if (i === 0) {
                                    return (
                                        <HeaderCell key={i + 1}>{item}</HeaderCell>
                                    );
                                }
                                //if there is only one data set, it can't be deleted. So no delete button.
                                if (item.length === 2) {
                                    return (
                                        <HeaderCellTD key={i + 1}>
                                            <HeaderInput index={i} type='text' name={item} onChange={(e) => changeDataSetName(e, i)} value={data[0][i]} />
                                        </HeaderCellTD>
                                    );
                                }
                                return (
                                    <HeaderCellTD key={i + 1}>
                                        <HeaderInput index={i} type='text' name={item} onChange={(e) => changeDataSetName(e, i)} value={data[0][i]} />
                                        <button className='DeleteDataSetButton' index={i} onClick={removeDataSet}>
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button>
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
                                    <TableRow key={i + 1}>
                                        {arr.map((cell, j) => {
                                            if (j === 0) {
                                                return (
                                                    <td key={(i + 1) * j}>
                                                        <input className='category-input' ref={categoryInputRef} index={i} type='text' name={cell} onChange={changeCategoryName} value={data[i][j]} />
                                                    </td>
                                                );
                                            }
                                            return (
                                                <td key={(i + 1) * j}>
                                                    {/* TODO: Add validation to ensure only positive integers */}
                                                    <input className='data-field' index1={i} index2={j} type='number' name={data[0][j] + data[i][0]} onChange={(e) => changeDataSetValue(e)} value={data[i][j]} pattern=" 0+\.[0-9]*[1-9][0-9]*$" onKeyDown={allowOnlyNumberKeys} />
                                                </td>
                                            );
                                        })}
                                        {/* TODO: When styling, display none until on hover */}
                                        <td><button className='DeleteCategoryButton' index={i} onClick={removeCategory}>
                                            <FontAwesomeIcon icon={faTimesCircle} />
                                        </button></td>
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
        </>
    );
}

export default DataTable;

