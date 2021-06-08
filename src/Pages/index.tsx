import React from 'react'
import { Switch, Route } from 'react-router'
import { Home } from './Home'

export const Pages = () => {
    return (
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    )
}
