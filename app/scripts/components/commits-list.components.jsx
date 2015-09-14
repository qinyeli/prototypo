import React from 'react';
import Lifespan from 'lifespan';
import LocalClient from '../stores/local-client.stores.jsx';
import ClassNames from 'classnames';
import moment from 'moment/min/moment-with-locales';

export default class CommitsList extends React.Component {
	componentWillMount() {
		this.lifespan = new Lifespan();
		this.client = new LocalClient.instance();

		var locale = window.navigator.userLanguage || window.navigator.language;
		moment.locale(locale)
	}

	componentWillUnmount() {
		this.lifespan.release();
	}

	render() {
		if (process.env.__SHOW_RENDER__) {
			console.log('[RENDER] commits list');
		}

		const classes = ClassNames({
		});

		var results = this.props.content;

		return (
			<li className="news-feed-article">
				<h2 className="news-feed-article-title">
					<div>
						<a href={`${this.props.url}`} title="See the commit on Git Hub" target="_blank">
							{`${this.props.title}`}
						</a>
					</div>
				</h2>
				<p className="news-feed-article-date">
					{`${moment(this.props.date).format('L')}`}
				</p>
				<div className="news-feed-article-content">
					{this.props.content.map(function(line, i) {
						return <p key={ i }>{ line }</p>;
					})}
				</div>
			</li>
		)
	}
}
