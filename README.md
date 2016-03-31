# Ionic timeline

###[Demo](http://codepen.io/comapedrosa/pen/gPLaxJ)
###[View on ionic market](http://market.ionic.io/plugins/ionic-timeline)

Ionic timeline is a simple yet useful plugin that allows you to create a simple customizable timeline/feed for your ionic apps.

 - Easy to customize
 - Supports icons as well as images
 - Works with all the platforms that ionic supports
 - Simple code
 - Easy to include in your existing app
 - Compatible with your existing code.
#### Details
Include the timeline.css file into your project.

That's it!

This feed works with a simple ng-repeat within a `section` as you will see in the code.
```
     <section id="cd-timeline" class="cd-container">
       <div ng-repeat="activity in timeline">
           ...
       </div>
     </section>
```
You can choose between pictures `cd-timeline-picture` or icons `cd-timeline-icon`  it is just this simple. As for the content just add `cd-timeline-content`.

#### Examples
Timeline royal icons
```
<div class="cd-timeline-icon royal">
   ...
</div>
<div class="cd-timeline-content royal">
   ...
</div>
```
![alt text](http://s28.postimg.org/vf0ewjslp/Screen_Shot_2015_12_28_at_19_41_31.png "Logo Title Text 1")
======
Timeline dark pictures
```
<div class="cd-timeline-picture dark">
   ...
</div>
<div class="cd-timeline-content dark">
   ...
</div>
```
![alt text](http://s7.postimg.org/3k73yuy63/Screen_Shot_2015_12_28_at_19_41_49.png
"Logo Title Text 1")

Download the project and see how it works or view our demo!

### Development
Made with love by the [myBeweeg team](https://www.mybeweeg.com) this timeline is an ionic adaptation of this [timeline](https://codyhouse.co/gem/vertical-timeline/)

### Version 0.2

 - Even easier to switch between icons and pictures no need for additional classes just: 
    - `cd-timeline-picture`
    - `cd-timeline-icon` 
    
Twitter:  [https://twitter.com/marc_campg](https://twitter.com/marc_campg)


