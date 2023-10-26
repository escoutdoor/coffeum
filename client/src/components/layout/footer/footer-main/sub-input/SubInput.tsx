import s from './sub-input.module.scss'
import { FC, useState } from 'react'

const SubInput: FC = () => {
	const [email, setEmail] = useState<string>('')

	return (
		<div className={s.form}>
			<input size={40} placeholder="Email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
			<button className={s.button}>Підписуватися</button>
		</div>
	)
}

export default SubInput
