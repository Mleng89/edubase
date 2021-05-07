import './App.css';
import Navbar from './components/navbar';
import { AuthProvider } from './Db/AuthContext';
function App() {
	return (
		<div>
			<AuthProvider>
				<Navbar />
			</AuthProvider>
		</div>
	);
}

export default App;
