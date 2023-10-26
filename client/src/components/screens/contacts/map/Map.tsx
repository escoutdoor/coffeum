import s from './map.module.scss'
import { FC } from 'react'

const Map: FC = () => {
	return (
		<iframe
			className={s.map}
			loading="lazy"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.3141925911746!2d30.508451915797064!3d50.47249429365715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce124b5e94dd%3A0x9a96821c5b33ccba!2z0YPQuy4g0JLQvtC70L7RiNGB0LrQsNGPLCA1NS01Nywg0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2sby!4v1628250092662!5m2!1sru!2sby"
			width="100%"
			height="450"
			data-rocket-lazyload="fitvidscompatible"
			data-lazy-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.3141925911746!2d30.508451915797064!3d50.47249429365715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce124b5e94dd%3A0x9a96821c5b33ccba!2z0YPQuy4g0JLQvtC70L7RiNGB0LrQsNGPLCA1NS01Nywg0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2sby!4v1628250092662!5m2!1sru!2sby"
			data-ll-status="loaded"
		></iframe>
	)
}

export default Map
