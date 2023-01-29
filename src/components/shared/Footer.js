import React, { Component } from "react";
import "./Footer.css";

export class Footer extends Component {
	render() {
		return (
			<footer>
				<p className="text-center">
					Un proyecto diseñado por Vicent García - 2020
					<br /> Datos obtenidos de{" "}
					<a className="text-center" href="https://www.ign.es">
						Instituto Geográfico Nacional
					</a> e <a className="text-center" href="http://www.icv.gva.es">
						Instituto Cartográfico Valenciano
					</a>
					<br /> Icons made by{" "}
					<a
						href="https://www.flaticon.com/authors/freepik"
						title="Freepik"
					>
						Freepik
					</a>{" "}
					from{" "}
					<a href="https://www.flaticon.com/" title="Flaticon">
						{" "}
						www.flaticon.com
					</a>
					<br />
					Icons made by{" "}
					<a
						href="https://www.flaticon.com/authors/smalllikeart"
						title="smalllikeart"
					>
						smalllikeart
					</a>{" "}
					from{" "}
					<a href="https://www.flaticon.com/" title="Flaticon">
						www.flaticon.com
					</a>
				</p>
			</footer>
		);
	}
}

export default Footer;
