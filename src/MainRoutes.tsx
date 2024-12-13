import { lazy, Suspense } from 'react'
import { Redirect, Route, Switch, useLocation } from 'wouter'

import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner'

import { BOOK_ROUTES } from './Routes'
import Home from './views/Home'
import NotFound from './views/NotFound'

const BooksFound = lazy(() => import('./views/BooksFound'))
const BookDetail = lazy(() => import ('./views/BookDetail'))

export const Routes = () => {
   
  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
        <Route path={BOOK_ROUTES.HOME}>
          <Home />
        </Route>
          <Route path={BOOK_ROUTES.BOOKS}>
            <BooksFound />
          </Route>
          <Route path={BOOK_ROUTES.DETAIL}>
            <BookDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </div>
  )
}
