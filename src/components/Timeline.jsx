import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

function Timeline() {
   return (
      <div className="flex flex-row justify-center my-20">
         <div className="w-7/12">
            <Title>Timeline</Title>
            {timeline.map(item => (
               // eslint-disable-next-line react/jsx-key
               <TimelineItem 
                  year={item.year}
                  title={item.title}
                  duration={item.duration}
                  details={item.details}
               />
            ))}
         </div>
      </div>
   )
}

export default Timeline;