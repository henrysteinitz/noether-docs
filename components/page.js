import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import classnames from 'classnames'
import styles from '../styles/Home.module.css'
import Ask from './ask'
import Caption from './caption'
import Detect from './detect'
import Embed from './embed'
import Segment from './segment'
import Sense from './sense'
import Summarize from './summarize'

const apiUrl = "https://noether-ai.herokuapp.com"

const Page = ({ endpoint }) => {
	return (
		<div>
	      <div className="page">
	        <div className="navigation">
	          <div className="logo-container">
	            <img src="logo2.jpg" className="logo" />
	          </div>
	          <Link href="/ask">
	            <div className={classnames("navigation-link", { selected: endpoint === "ask"})}>
	              ask
	            </div>
	          </Link>
	          <Link href="/detect">
	            <div className={classnames("navigation-link", { selected: endpoint === "detect"})}>
	              detect
	            </div>
	          </Link>
	          <Link href="/embed">
	            <div className={classnames("navigation-link", { selected: endpoint === "embed"})}>
	              embed
	            </div>
	          </Link>
	          {/*<Link href="/index">
	            <div className="navigation-link">
	              index
	            </div>
	          </Link>*/}
	          {/*<Link href="/save">
	            <div className="navigation-link">
	              save
	            </div>
	          </Link>*/}
	          {/*<Link href="/search">
	            <div className="navigation-link">
	              search
	            </div>
	          </Link> */} 
	          <Link href="/segment">
	            <div className={classnames("navigation-link", { selected: endpoint === "segment"})}>
	              segment
	            </div>
	          </Link>
	          {/*<Link href="/similar">
	            <div className="navigation-link">
	              similar
	            </div>
	          </Link>*/}
	          <Link href="/summarize">
	            <div className={classnames("navigation-link", { selected: endpoint === "summarize"})}>
	              summary
	            </div>
	          </Link>
	          <div className="version">
		      	 version 0.0 (alpha)
		   	  </div>
	        </div>
	      </div>
	      <div className="page-content-container">
	      	{
	      		(endpoint === "ask") &&
	      		<Ask apiUrl={apiUrl} />
	      	}
	      	{
	      		(endpoint === "detect") &&
	      		<Detect />
	      	}
	      	{
	      		(endpoint === "embed") &&
	      		<Embed />
	      	}
	      	{
	      		(endpoint === "segment") &&
	      		<Segment />
	      	}
	      	{
	      		(endpoint === "summary") &&
	      		<Summary />
	      	}
	      </div>
	    </div>
    )
}

export default Page