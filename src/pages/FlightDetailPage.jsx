import { useLocation, useNavigate, useParams } from 'react-router-dom'
import FlightDetail from '../components/flight/FlightDetail'
import flightsData from '../data/dummyFlights.json'

export default function FlightDetailPage() {
  const { id } = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const flightFromState = location.state?.flight
  const flight = flightFromState || flightsData.find((item) => String(item.id) === String(id))

  if (!flight) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
        Flight not found. <button onClick={() => navigate('/search')} className="text-sky-700 font-semibold">Return to search</button>
      </div>
    )
  }

  return <FlightDetail flight={flight} />
}
