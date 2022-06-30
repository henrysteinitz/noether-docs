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
import Home from './home'
import Save from './save'
import Search from './search'
import Segment from './segment'
import Sense from './sense'
import Summary from './summary'

const apiUrl = "https://noether-ai.herokuapp.com"

const Page = ({ endpoint }) => {
	return (
		<div>
	      <div className="page">
	        <div className="navigation">
	          <div className="logo-container">
	          	<Link href="/">
	            	<img src="logo2.jpg" className="logo" />
	            </Link>
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
	          <Link href="/partition">
	            <div className={classnames("navigation-link", { selected: endpoint === "partition"})}>
	              partition
	            </div>
	          </Link>
	          <Link href="/save">
	            <div className={classnames("navigation-link", { selected: endpoint === "save"})}>
	              save
	            </div>
	          </Link>
	          <Link href="/search">
	            <div className={classnames("navigation-link", { selected: endpoint === "search"})}>
	              search
	            </div>
	          </Link> 
	          {/*<Link href="/similar">
	            <div className="navigation-link">
	              similar
	            </div>
	          </Link>*/}
	          <Link href="/summary">
	            <div className={classnames("navigation-link", { selected: endpoint === "summary"})}>
	              summary
	            </div>
	          </Link>
	          <div className="navigation-footer">
	          	<Link href="https://buy.stripe.com/8wMaHk1BBfeh8LKaEF">
		          	<button className="subscribe">
		          		Subscribe
		          	</button>
	          	</Link>
		        <div className="version">
		      	 version 0.0 (alpha)
		   		</div>
		   	  </div>
	        </div>
	      </div>
	      <div className="page-content-container">
	      	{
	      		!endpoint && 
	      		<Home />
	      	}
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
	      		(endpoint === "partition") &&
	      		<Segment />
	      	}
	      	{
	      		(endpoint === "save") &&
	      		<Save />
	      	}
	      	{
	      		(endpoint === "search") &&
	      		<Search />
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