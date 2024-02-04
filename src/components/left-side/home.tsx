import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '../ui/page-header'

const Home = () => {
  return (
    <PageHeader>
      <div className="flex flex-row items-center gap-5 my-auto">
        <PageHeaderHeading>Weather app</PageHeaderHeading>
        <div className="text-center rotate-90 items-center gap-5">
          <svg
            className="animate-bounce w-6 h-6 mx-auto text-muted-foreground"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3.414l-7.293 7.293a1 1 0 101.414 1.414L10 6.414l5.879 5.879a1 1 0 101.414-1.414L10 3.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <PageHeaderDescription className="!text-pretty !max-w-lg">
        Get to know more about <strong>AIR</strong> and
        <strong> WEATHER</strong> in your city!
      </PageHeaderDescription>
    </PageHeader>
  )
}

export default Home
