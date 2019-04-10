import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import FindCourseContainer from './FindCourseContainer';

class LandingsPageContainer extends React.Component {

  render() {
    return (
      <div>

        <div style={{ display: 'flex' }}>

          <div>
            <FindCourseContainer history={this.props.history} />
          </div>

          <div>
            <img style={{ width: '504px', height: '504px' }} src='https://s3-alpha-sig.figma.com/img/9c3a/a143/134f46c4fe14b2c85194cf631945352c?Expires=1555891200&Signature=Vcv3k4-3FQZ2XdJ-dgWH3G3fbwKXPMiEnI03WXmntsp91s8V-GBUoAA5gz-509kLiWSvPWaoYDEi74poctq2gfhBWS6SEd6311GUKkVKqOjKemPBpkIYSFnh2kx6SG~921egRycwnR1zWcRKh5wL3m2jGmb7hU0jRn5kFzVqP0yrb-G5SLnPf9QEvYB9PV~gSrGEbMke80pD7jlXQaZW-lPcv35byHHGRbUJKuUE0fNIIWF6Er8KUO1J7iwK5gttv2Wwv~lTxiO6UCAnfiJT948Q5gomsBnGRn-Aa81ZuCE3jUi-YWDCBwKDAAkUbUzuJ6Wa15dK3Dn5D5sNYIKREQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
          </div>
          
        </div>

        <div>
          <h1>Study more efficiently with Acaboo.</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br />
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
        </div>

        <div>
          <img style={{ width: '1110px', height: '770px' }} src='https://s3-alpha-sig.figma.com/img/17ba/782e/76ff2381eaaedd2e544fb6fa24a4dd19?Expires=1555891200&Signature=LMGLuZYXfqckivgf43n6VUYsrK-9UfiEs3Q9XOu5TxRiYV68bYPYypno8ZI-HNP9Ar3F9toa-70nKedWigUtHEQY5Y2fDG1t2t-ad89jgenCteDd1tCvQ14CXwjQTuxKqBH2iwizonkQFxNWeHgBdS6x53Nx2v33JG~VLF8P56WlGmfn0~Og7L9g-NElwo4IyhshjD4TjPt1FYA4Ns1UHWSmi8Eb5~VfvJIYAuxi4jOxFnO~4zF2KBg-8M0LDVJSoX4KTAdT5~oRVKjwynEw2pz6t77CL~1VYeVcXBdPNgezyMk5kxYmaxWfuL51qR9xobVn3~d-BCBOAaRayrlfcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
        </div>

        <div>
          <div>
            <h1>About Acaboo</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
            <Link to="/about">Learn more &#8594;</Link>
          </div>

          <div>
            <p>Feature 1 <br />
              Sed ut perspiciatis unde omnis iste <br />
              natus error sit voluptatem<br />
              accusantium.</p>

            <p>Feature 2 <br />
              Sed ut perspiciatis unde omnis iste <br />
              natus error sit voluptatem <br />
              accusantium.</p>
          </div>

          <div>
            <img style={{ width: '713px', height: '423px' }} src='https://s3-alpha-sig.figma.com/img/6c2a/cda3/f90a32d245e2e847ddb151faa20dee47?Expires=1555891200&Signature=BY~I~0COlMd1pjYo1Oztj-du-i8xV8W-fsGT~~2I9v3iIi~xyf6q651c8t6-DtBW8pBzZFLLNdw7HnXHYA~TmiQWFHp7hlJxmD76I0LC21nxERJHe2ZKzRzwVW9CIe6zmBrdSxMTqQVxrZM9kXJ1KJ18myXmDZzFbtILeJh~1P3EF2-vZtTrHz6Og-dChQX8Gm1bJwn6iHTT6QZ91OUrlM1PDXMS~PnEidxRLiyzB8X2HXGC4KI54vQEU6I3qs9tsxooum4hOA47v4JYzqbHBh42iamWZBqmFY5g6KzRDt20zacIK0tYBRN1q5RWGmrdMlVTEgFOKsaxySTfpv5WwQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
          </div>

        </div>

        <div>
          <h1>Start studying with Acaboo</h1><Link to="/courses"><button>Browse courses</button></Link>
          <p>Already using Acaboo?<Link to='/logins'>Log In</Link> </p>
        </div>

        <div>
          <h1>Loved by students and teachers</h1>
        </div>

        <div>

          <div>
            <p>“Saves me the hassle of studying. Acaboo does everything everywhere.”</p>
            <img src='https://s3-alpha-sig.figma.com/img/0c91/dbf2/abe14053a2b47dac19454da3387c9d54?Expires=1555891200&Signature=gu8zvqQD0~CCNIlT7FN1UVYVJOFpk2T6vpr93xze9fLUZaqI57LmU8yQ6OPTAra0RZzyHQSSYlgrRK0Ific2YXTMsFXCJLJ8FnfLL34DVl42Fxg6tDwzlCwdYVd~g85pPi8lOI-f9GiJ0LNRxKeGeXQs4OEnDpRsns6UPPOBzrU4PR18Lrvb5pZGiJi6NpNoDSvkpjrq7cB~uNw6Ek-uMleMGhLu6WLNV6G37RdcTNwLy425h4sQKghcaYE3wO318UBC0k-daRZv4k8ZlGmxmXp~cH2n8mdw9YHOummeKhB5~n7OvVPa8wxvIo2F8rgW-0D~jBK6QAZ63855-Sb4iA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
            <p>David de Bie, <br />Business Administration student, VU</p>
          </div>

          <div>
            <p>“It enables my students to get the most out of a course, everytime...”</p>
            <img src='https://s3-alpha-sig.figma.com/img/18bd/27b1/329bd04d136143a95ba6dfe3a8eb75f8?Expires=1555891200&Signature=ebSgOBcKeKAjQcGQo2xp2psWKYt5r85zXXyuIfo~2WOeOIiLq~8e9CFLt6t6sgiN1VsYnz18YXyk5W64YBr8KcZG23hGMYMbMZ~7JP9MBdcDbMVumvwZWJZYEJ3XEetqu2alkDNY6SYzt5OusOCo7lRONPN3L8ZKeHfeXMmuZ6AhmZaRpJQAD~eUyJ~6cUI95Qsv7ieFTyHLOuXMZLGjnCoREHR-zrtZxN7m3balCd501VZRDzaHc3qlRo72S9d50j95W3ncWBZgB8lGDLCXflvMrQ8Z6f3Mim212oDX9c6PSK2OftTQIHsALfM1AJ7mLtM8c0vbq4V-eMWJ6j0v2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
            <p>Paul de Groot, <br />Mathematics teacher UVA</p>
          </div>

          <div>
            <p>“Saves me the hassle of studying. Acaboo does everything everywhere.”</p>
            <img src='https://s3-alpha-sig.figma.com/img/18bd/27b1/329bd04d136143a95ba6dfe3a8eb75f8?Expires=1555891200&Signature=ebSgOBcKeKAjQcGQo2xp2psWKYt5r85zXXyuIfo~2WOeOIiLq~8e9CFLt6t6sgiN1VsYnz18YXyk5W64YBr8KcZG23hGMYMbMZ~7JP9MBdcDbMVumvwZWJZYEJ3XEetqu2alkDNY6SYzt5OusOCo7lRONPN3L8ZKeHfeXMmuZ6AhmZaRpJQAD~eUyJ~6cUI95Qsv7ieFTyHLOuXMZLGjnCoREHR-zrtZxN7m3balCd501VZRDzaHc3qlRo72S9d50j95W3ncWBZgB8lGDLCXflvMrQ8Z6f3Mim212oDX9c6PSK2OftTQIHsALfM1AJ7mLtM8c0vbq4V-eMWJ6j0v2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
            <p>Emma de Leeuw, <br />Business teacher, UVA</p>
          </div>

          <div>
            <h1>Too much distraction, no focus? </h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
            <img src='https://s3-alpha-sig.figma.com/img/9682/9cf9/f50543efc622f16b18446ac498d06bd3?Expires=1555891200&Signature=Qn~vpVh5p~wAYr9ck8Icd~0Cd-SYAwxYU3YgjrRrFoY9~avnuJ8QPV7nsf95mKx47o23gYZXBwokyyNVrhfCr8NylBJ2-5NP6NW8wqQrAHvm3RS3K4xlIvOsIGlrOfhiLlOfXtByJ2SdlUtJ-NNVpHuU~0~RWUbp0XjHZhvjMChyujepNGZoA2lju1-GoXIjOEoDl~EflvcjP-HQKXI86gtUITDqlPYKqvuE9OBwF59tgQfVsG9Pxe9OKGHI0IobSURVVEnB7epWDgbZ-SenLxDw9Jw1CprdZu7L55QYNdwDkdTz0UQrD-pXg7gerMGFVkzI1srevdWwasuN6PeFQg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
          </div>

          <div>
            <h1>Start studying with Acaboo.</h1>
            <Link to="/courses"><button>Browse courses</button></Link>
            <Link to="/about"><button>Learn More</button></Link>
          </div>
        </div>

      </div>)
  }
}


const mapStateToProps = state => ({

})

export default LandingsPageContainer