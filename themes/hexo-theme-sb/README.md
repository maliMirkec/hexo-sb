# hexo-theme-sb

[Hexo Theme SB](https://sbtheme.silvestar.codes) Clean and simple theme for Hexo blog framework.

Official website: [https://sbtheme.silvestar.codes](https://sbtheme.silvestar.codes)
Used on: [https://www.silvestar.codes](https://www.silvestar.codes)

## Installation

Npm installation:

```bash
npm i -S hexo-helper-inline-svg hexo-render-pug hexo-theme-sb
```

Yarn installation:

```bash
yarn add hexo-helper-inline-svg hexo-render-pug hexo-theme-sb
```

This will install SB theme in both `./node_modules/hexo-theme-sb/` and `./themes/hexo-theme-sb/`
folders.

## Initialization

Update the config file to start using SB theme:

```yml
theme: hexo-theme-sb
```

Check that your `.gitignore` file contains `/node_modules/` rule.

For better Hexo performance, you could add the following line to your config file:

```yaml
ignore:
  - '**/themes/**/*(node_modules|lib)' # improve performance while `hexo server` is running
```

## Configuration

There is already a config file in SB theme, but it is commented.
Here is the file with every possible option:

```yaml
# General section
site:
  full_name: SB - Silvestar's personal website
  short_name: SB
  description: Silvestar is a fearless web engineer eager to prove his worth
  logo: /gfx/svg/logo.svg
  language: en

# Menu section
menu:
  centered: true
  display_logo: true
  items:
    Home: /
    Blog: /categories/articles
    Portfolio: /portfolio
    About: /about-me

# Homepage section
home_page:
  - section:
    title: Silvestar Bistrović
    paragraphs:
     - Fearless web engineer
  - section:
    title: Specializations
    paragraphs:
      - Frontend
      - User Interface
      - Wordpress
      - Web Optimization
  - section:
    title: Projects
    links:
      Starter Project: //starter-project.silvestar.codes
      Hexo Theme SB: //sbtheme.silvestar.codes
      Contiamo: //www.contiamo.com
      Irina and Matej: //irinaandmatej.com
  - section:
    title: Links
    links:
      Mail: mailto:me@silvestar.codes?Subject=Hello
      Twitter: //twitter.com/malimirkeccita
      Github: //github.com/maliMirkec

# Open Graph section
open_graph:
  pretty_url: true
  image: /gfx/jpg/SB-big.jpg
  fb:
    fb_id: 340933169673372
    fb_admins: malimirkeccita
  twitter:
    twitter_id: malimirkeccita
  google_plus:
    google_plus_id: +SilvestarbistrovicFromHr

# Widgets
widgets:
  contact:
    mail: mailto:me@silvestar.codes?Subject=Hello
    twitter: //twitter.com/malimirkeccita
    linkedin: //www.linkedin.com/in/starbist/
    facebook: //www.facebook.com/silvestar.codes/
    medium: //medium.com/@malimirkeccita
    github: //github.com/maliMirkec
    codepen: //codepen.io/CiTA/
    lastfm: //www.last.fm/user/maliMirkec
  google_analytics:
    tracking_id: UA-12345678-9
  disqus:
    shortname: silvestarbistrovic
  sharing:
    twitter: malimirkeccita
    facebook: silvestar.codes
```


## Advanced

This theme follows the latest best practices. This is achieved by using [Starter Project].
Everything is already set up for you, but you could configure the theme by updating `./themes/hexo-theme-sb/config.json` file.

For example, if you want to generate new Critical CSS file, you should update `penthouse.criticalCssConfigs.url` option and set it according to your Hexo configuration.

After this, run `gulp` command inside `./themes/hexo-theme-sb/` folder.

__It is important that your website is running.__

## Support

If you need any help, please feel free to [contact me].

If you're having issues, please [search for issues](https://github.com/maliMirkec/hexo-theme-sb/issues) or open [a new one](https://github.com/maliMirkec/hexo-theme-sb/issues/new).

[Starter Project]: https://starter.silvestar.codes
[contact me]: mailto:me@silvestar.codes?Subject=Help

