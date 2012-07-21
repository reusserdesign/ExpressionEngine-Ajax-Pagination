# Pager

## Description
Pager is a jQuery plugin to make Ajax pagination in ExpressionEngine a little easier (and nicer looking!)

## Demo
Sorry, it's not a live demo, but [the demo video](http://cl.ly/IGDP) should help you see what's going on here.

## How to use

### Example ExpressionEngine markup:
```html
<section id="articles">
	{exp:channel:entries channel="news" limit="10" paginate="bottom" dynamic="no"}
		<article>
			<h2>{title}</h2>
			{content}
		</article>
		{paginate}
			{pagination_links}
				<ul class="pagination">
					{previous_page}
						<li><a href="{pagination_url}">&laquo;</a></li>
					{/previous_page}
					
					{page}
						<li{if current_page} class="active"{/if}><a href="{pagination_url}">{pagination_page_number}</a></li>
					{/page}
					
					{next_page}
						<li><a href="{pagination_url}">&raquo;</a></li>
					{/next_page}
				</ul>
			{/pagination_links}
		{/paginate}
	{/exp:channel:entries}
</section>
```

### Add Pager Javascript (don't forget jQuery!) to document
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="pager/pager.min.js"></script>
<script src="pager/index.js"></script>
```

### Add Pager CSS for the kewl loading animation (all CSS-based, thanks to [Dan Eden](http://dribbble.com/shots/631496-Spinspinspin-CSS))
```html
<link href="pager.css" rel="stylesheet">
```

### Celebrate!

## Options
The plugin comes with a nice set of options you can dabble with.

```js
link:			'.pagination a',		// The anchor to your pagination links
pull:			'#articles > *',		// When your Ajax request occurs, the plugin pulls this DOM element out into the article wrapper
loaderID:		'loader',				// The ID of the loader element displayed when the Ajax request is initiated
scrollTo:		'body',					// Where the window scrolls after the next page successfully loads
fadeSpeed:		100,					// The fade speed on the loader animation and opacity changes for the article wrapper
fadeOpacity:	.5						// The opacity level on the article wrapper when the Ajax request is initiated
```

## Notes
This has only really been tested with _our_ standard ExpressionEngine pagination methods. Meaning, this may or may not work when using this with Wordpress or content management systems. Fork it and make it better! My jQuery skills are pretty n00bish.

## Credits
Again, I'm a jQuery n00b. Much of this code was integrated, dissected, and taught to me via [Design Aeon](http://www.designaeon.com/wordpress-ajax-pagination). The tutorial was very well documented, and it helped me further my jQuery knowledge for this. Also, huge kudos to Dan Eden for his awesome [CSS-based loader](http://dribbble.com/shots/631496-Spinspinspin-CSS). You can thank him that "retina", "gif", and "extra http request" are no longer scary words.