# Home Server/NAS Project Part 1

---

For the last couple weeks, I've been thinking and planning on building a computer that can double as a NAS and a small home server.
There's a few reasons I'm starting into this project. First, I've been thinking about how fragmented my digital life is.
I'm really bad about continuing to use software products after setting them up for the first time, and so I don't have one
place where, for instance, all my photos live. So often I'll find it easier to re-download something rather than just finding it on my computer even.
Couple that with how much I'm moving between computers (I have a mac laptop for work, a windows tower for playing games, and another mac laptop for personal use) and
I'm starting to feel the need for some central place I can keep all my digital crap.

I tried using Dropbox for this purpose, but even though I never quite hit the data cap I paid for, it was always in the back of my mind. And since it claimed to be
fully-automatic-don't-have-to-think-about-it with its software syncing happening "automatically", I never really felt totally secure that I'd have files where and
when I need them. With a NAS instead, things become more intentional, while still being accessible across all my devices. In theory at least!

That actually segues nicely into my second reason for wanting to build this, and that's around feeling a drive towards having a system I can just...tinker around on.
I've been thinking a lot about desktop linux again, and rather than deluding myself once more that "this time it's mature enough to use 100% of the time", instead having
a device where linux is just obviously the best option to use seems like a good deal. But more importantly than that is that having a home linux box is a _great_ excuse
to tinker with personal projects more. I recently started a job with a few backend tech stacks I'm not very experienced in yet (Python/Flask and Elixir) and so not
having to think about where I stand up a new instance of something to tinker with and host seems like it'd make it easier to start doing those things more often. Hell,
I wouldn't even have to switch off my Windows computer to mess around with those projects: I hate coding in Windows (not just the terminal, but the Windows keyboard shortcuts
drive me mad) so being able to just remote in and tinker whenever is great for getting that barrier to action lower.

Lastly, and perhaps most importantly, it just seems like a fun project. It's nice that it has the above side benefits to me, so I feel like it's not a waste of money regardless.
But the real reason I'm starting on this is just because I think it'll be fun to have something like this to tinker around with.

~

## The Parts

The first point of action here is acquiring the parts for the build. (I opted to build a new system instead of just buying a Synology so that I can tweak things
and really stretch my comfort zone. If it becomes the world's most overkill NAS after I get bored of this project, so be it.) Unfortunately, I'm faced with a couple annoyances
right off the bat:

- I gave away my last desktop PC to a friend. It had a pretty good case for this build (Micro-ATX with lots of drive bays) so I'm short on spare parts
- My apartment is tiny. The only place I have to keep a NAS is right in my living room, next to my work setup and living space
- My apartment has _the worst electric wiring known to man_. It was built almost 100 years ago and certain breakers will trip with a single appliance on them, and I plan on plugging this into the same breaker my main PC runs on. 😱

Not ideal.

That does, however, mean that I have some choices made for me in terms of what to look for. I need to find a very small, _very_ quiet case. I need parts that draw very little power. And I'm not bound on having to work around existing parts (though I do have an old graphics card that might be nice to fit into the build, should I need offboard graphics at some point.) And there's surprisingly few cases in this arena. So I quickly settled on the JONSBO N2. Lots of drive bays for its tiny size, and looks like it'll fit in well enough with my furniture.

![](http://localhost:5173/public/blog_posts/assets/jonsbo-n2.png)

Past that, I also wanted to slightly overspend on the CPU and memory, since I don't totally know what I'm going to want to do with this server yet apart from tinker. As such I went with something that struck a good balance between power consumption and price, and landed on a Ryzen 7 5700G. I also grabbed 32 gigs of memory -- I do know that I plan on running at least a few VMs for things like Jellyfin, and those can be huge memory hogs.

Apart from that, there aren't too many interesting hardware choices I made here. I opted for a SATA SSD to keep the m.2 bay open for other peripherals. I got a single 10 TB hard drive, mostly because I don't know anything about RAID and backup stuff yet and am hesitant to drop any more money before I do. (Hell, I definitely don't need this much space, but the price difference between that drive and the lower capacity ones made it hard to pass up.)

So, yeah! Now that this boring bit is out of the way, I'm excited to get started on the build next week, and will probably start teaching myself some of the software side of things in the meantime.
