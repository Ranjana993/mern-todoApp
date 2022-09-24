import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTab } from '../redux/action'
import { TABS } from '../redux/action/type'

const Tabs = ({ currentTab }) => {
    const dispatch = useDispatch()

    return (
        TABS.map((tabs, id) => (
            <button
                key={id}
                className={tabs === currentTab ? 'button selected' : 'button'}
                onClick={() => dispatch(toggleTab(tabs))}
            >
                {tabs}
            </button>
        ))
    )
}

export default Tabs