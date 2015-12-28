# Ionic timeline
###[Demo](http://codepen.io/comapedrosa/pen/gPLaxJ)
###[View on ionic market](http://market.ionic.io/plugins/ionic-timeline)
Ionic timelone is a simple yet useful plugin that allows you to create a simple customizable timeline/feed for your ionic apps.

  - Easy to customize
  - Supports icons as well as images
  - Works with all the platforms that ionic supports
  - Simple code
  - Easy to include in your existing app
  - Compatible with your existing code.
 
#### Details
This feed works with a simple ng-repeat within a `section` as you will see in the code.
```
      <section id="cd-timeline" class="cd-container">
        <div ng-repeat="activity in timeline">
            ...
        </div>
      </section>
```
For the customization you only have to change the style on both `cd-timeline-icon` or `cd-timeline-icon` depending on which one are you using (pictures or icons) and `cd-timeline-content`.

#### Examples
Timeline royal icons
```
<div class="cd-timeline-icon text-center royal">
    ...
</div>
<div class="cd-timeline-content padding royal">
    ...
</div>
```
![alt text](http://s28.postimg.org/vf0ewjslp/Screen_Shot_2015_12_28_at_19_41_31.png "Logo Title Text 1")
======
Timeline dark pictures
```
<div class="cd-timeline-picture text-center dark">
    ...
</div>
<div class="cd-timeline-content padding dark">
    ...
</div>
```
![alt text](http://s7.postimg.org/3k73yuy63/Screen_Shot_2015_12_28_at_19_41_49.png "Logo Title Text 1")

Download the project and see how it works or view our demo!

### Development
Made with love by the [myBeweeg team](https://www.mybeweeg.com) this timeline is an ionic adaptation of this [timeline](https://codyhouse.co/gem/vertical-timeline/)

**Free Software, Hell Yeah!**
