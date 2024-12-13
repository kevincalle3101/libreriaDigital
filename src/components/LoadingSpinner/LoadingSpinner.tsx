import { FC } from 'react'
import { Spinner } from 'react-bootstrap'

interface ILoadingSpinner {
  height?: number
}
export const LoadingSpinner: FC<ILoadingSpinner> = ({ height = 70 }) => (
  <div className="w-100 d-flex justify-content-center align-items-center" style={{ height: `${height}vh` }}>
    <Spinner animation="border" variant="primary" />
  </div>
)
