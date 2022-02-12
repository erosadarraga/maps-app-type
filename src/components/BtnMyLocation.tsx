import { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';

/* Btn */

export const BtnMyLocation = () => {
	const { map, isMapReady } = useContext(MapContext);
	const { userLocation } = useContext(PlacesContext);
	const onClick = () => {
		if (!isMapReady) throw Error('Mapa No Esta Listo');
		if (!userLocation) throw Error('UserLocation No Esta Listo');
		map?.flyTo({
			zoom: 14,
			center: userLocation
		})
	};
	return (
		<button
			onClick={onClick}
			className="btn  btn-primary"
			style={{
				position: 'fixed',
				top: '20px',
				right: '20px',
				zIndex: '999'
			}}
		>
			Mi Ubicacion
		</button>
	);
};
