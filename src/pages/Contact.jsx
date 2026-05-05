
export default function Contact() {
  return (
    <>
    <div className="isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
  <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
    <div style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
  </div>
  <div className="mx-auto max-w-2xl text-center">
    <h2 className ="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">Contact sales</h2>
    <p className="mt-2 text-lg/8 text-gray-400">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
  </div>
  <div className="w-full md:w-1/2 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.5168727408586!2d80.8620831144718!3d24.571352162836167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847efa4bf0455f%3A0xf7df454e162ab1de!2sVikas%20Automobiles%2C%20Satna%20(HP%20LUBE%20DISTRIBUTOR)!5e0!3m2!1sen!2sin!4v1652856740678!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"/>
      </div>

  
  <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">First name</label>
        <div className="mt-2.5">
          <input id="first-name" type="text" name="first-name" autocomplete="given-name" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
        </div>
      </div>
      <div>
        <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white">Last name</label>
        <div className="mt-2.5">
          <input id="last-name" type="text" name="last-name" autocomplete="family-name" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="company" className="block text-sm/6 font-semibold text-white">Company</label>
        <div className="mt-2.5">
          <input id="company" type="text" name="company" autocomplete="organization" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm/6 font-semibold text-white">Email</label>
        <div className="mt-2.5">
          <input id="email" type="email" name="email" autocomplete="email" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-white">Phone number</label>
        <div className="mt-2.5">
          <div className="flex rounded-md bg-white/5 outline outline-1 -outline-offset-1 outline-white/10 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
            <div className="grid shrink-0 grid-cols-1 focus-within:relative">
              <select id="country" name="country" autocomplete="country" aria-label="Country" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-2 pl-3.5 pr-7 text-base text-gray-400 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
                <option>US</option>
                <option>CA</option>
                <option>EU</option>
              </select>
              <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4">
                <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
              </svg>
            </div>
            <input id="phone-number" type="text" name="phone-number" placeholder="123-456-7890" className="block min-w-0 grow bg-transparent py-1.5 pl-1 pr-3 text-base text-white placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-sm/6" />
          </div>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm/6 font-semibold text-white">Message</label>
        <div className="mt-2.5">
          <textarea id="message" name="message" rows="4" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"></textarea>
        </div>
      </div>
      <div className  ="flex gap-x-4 sm:col-span-2">
        <div className="flex h-6 items-center">
          <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-white/5 p-px outline-offset-2 outline-indigo-500 ring-1 ring-inset ring-white/10 transition-colors duration-200 ease-in-out has-[:checked]:bg-indigo-500 has-[:focus-visible]:outline has-[:focus-visible]:outline-2">
            <span className="size-4 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-[:checked]:translate-x-3.5"></span>
            <input id="agree-to-policies" type="checkbox" name="agree-to-policies" aria-label="Agree to policies" className="absolute inset-0 size-full appearance-none focus:outline-none" />
          </div>
        </div>
        <label htmlFor="agree-to-policies" className="text-sm/6 text-gray-400">
          By selecting this, you agree to our
          <a href="#" className="whitespace-nowrap font-semibold text-indigo-400">privacy policy</a>.
        </label>
      </div>
    </div>
    <div className="mt-10">
      <button type="submit" className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Let's talk</button>
    </div>
  </form>
</div>

      {/* <div className="w-50% mx-auto flex items-center justify-between py-4">
        <img src="/assets/logo1.jpg" alt="Automobiles" width="50%" height="auto" />
      </div>

      <section className="border-t border-gray-300 py-10">
        <div className="mx-auto flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.5168727408586!2d80.8620831144718!3d24.571352162836167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847efa4bf0455f%3A0xf7df454e162ab1de!2sVikas%20Automobiles%2C%20Satna%20(HP%20LUBE%20DISTRIBUTOR)!5e0!3m2!1sen!2sin!4v1652856740678!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="info-box">
              <div className="info">
                <h2>ADDRESS</h2>
                <p>
                  Vikas Automobiles,
                  <br />
                  Near Yadav Dharmkanta, Rewa Road,
                  <br />
                  Satna, Madhya Pradesh 485001
                </p>
              </div>

              <div className="info">
                <h2>EMAIL</h2>
                <a href="mailto:hpclcfasatna@gmail.com">hpclcfasatna@gmail.com</a>

                <h2 className="mt">PHONE</h2>
                <p>9827003016</p>
              </div>
            </div>
          </div>

          <div className="form-box">
            <h2>ENQUIRY</h2>
            <p className="subtitle">PLEASE ENTER YOUR ENQUIRY HERE</p>
            <form
              className="gform"
              method="POST"
              data-email="dhairyakhandelwal091@gmail.com"
              action="https://script.google.com/macros/s/AKfycbzWAqVkNHjakt4VeQK3GxECdqh8Yp0w0WcPQC60rXarcfqVy24F34v6vTImfeL4iNEq/exec"
            >
              <label htmlFor="firstName">Name</label>
              <input type="text" id="firstName" name="firstName" />

              <label htmlFor="companyName">Company Name</label>
              <input type="text" id="companyName" name="companyName" />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />

              <label htmlFor="mobile">Mobile No.</label>
              <input type="text" id="mobile" name="mobile" />

              <label htmlFor="Products">Select your requirement</label>
              <select
                name="Products"
                id="Products"
                style={{
                  width: '100%',
                  padding: '5px',
                  fontSize: '14px',
                  border: '1px solid rgba(128, 128, 128, 0.199)',
                  marginTop: '5px',
                }}
              >
                <option value="">Select Product</option>
                <option value="ENKLO 32">ENKLO 32</option>
                <option value="ENKLO 46">ENKLO 46</option>
                <option value="ENKLO 68">ENKLO 68</option>
                <option value="ENKLO 100">ENKLO 100</option>
                <option value="ENKLO 121">ENKLO 121</option>
                <option value="ENKLO 150">ENKLO 150</option>
                <option value="ENKLO 176">ENKLO 176</option>
                <option value="ENKLO 220">ENKLO 220</option>
                <option value="ENKLO 320">ENKLO 320</option>
                <option value="ENKLO 460">ENKLO 460</option>
                <option value="ENKLO HLP 22">ENKLO HLP 22</option>
                <option value="ENKLO HLP 32">ENKLO HLP 32</option>
                <option value="ENKLO HLP 46">ENKLO HLP 46</option>
                <option value="ENKLO HLP 48">ENKLO HLP 48</option>
                <option value="FIRE RESISTANT HYDRAULIC &amp; CIRCULATING OILS">
                  FIRE RESISTANT HYDRAULIC &amp; CIRCULATING OILS
                </option>
                <option value="WAYLUBE 68">WAYLUBE 68</option>
                <option value="WAYLUBE N68">WAYLUBE N68</option>
                <option value="WAYLUBE 220">WAYLUBE 220</option>
                <option value="PARTHAN EP 68">PARTHAN EP 68</option>
                <option value="PARTHAN EP 100">PARTHAN EP 100</option>
                <option value="PARTHAN EP 150">PARTHAN EP 150</option>
                <option value="PARTHAN EP 220">PARTHAN EP 220</option>
                <option value="PARTHAN EP 257">PARTHAN EP 257</option>
                <option value="PARTHAN EP 320">PARTHAN EP 320</option>
                <option value="PARTHAN EP 460">PARTHAN EP 460</option>
                <option value="PARTHAN EP 480">PARTHAN EP 480</option>
                <option value="PARTHAN EP 1000">PARTHAN EP 1000</option>
                <option value="HP GEAR OIL XP 80 W 90">HP GEAR OIL XP 80 W 90</option>
                <option value="HP GEAR OIL EP 90">HP GEAR OIL EP 90</option>
                <option value="HP GEAR OIL EP 140">HP GEAR OIL EP 140</option>
                <option value="HP GEAR OIL EP 85 w 140">HP GEAR OIL EP 85 w 140</option>
                <option value="HYTAK 0">HYTAK 0</option>
                <option value="HYTAK 1">HYTAK 1</option>
                <option value="HYTAK 2">HYTAK 2</option>
                <option value="HYTAK 5">HYTAK 5</option>
                <option value="HYTAK F3">HYTAK F3</option>
                <option value="HYTAK F4">HYTAK F4</option>
                <option value="HYTAK F5">HYTAK F5</option>
                <option value="SEETUL 15">SEETUL 15</option>
                <option value="SEETUL 22">SEETUL 22</option>
                <option value="SEETUL 32">SEETUL 32</option>
                <option value="SEETUL 46">SEETUL 46</option>
                <option value="SEETUL 64">SEETUL 64</option>
                <option value="SEETUL 100">SEETUL 100</option>
                <option value="SEETUL N32">SEETUL N32</option>
                <option value="SEETUL N68">SEETUL N68</option>
                <option value="HYCOM C 100">HYCOM C 100</option>
                <option value="HYCOM C 150">HYCOM C 150</option>
                <option value="HYCOM C 220">HYCOM C 220</option>
                <option value="HYCOM C 320">HYCOM C 320</option>
                <option value="HYCOM C 460">HYCOM C 460</option>
                <option value="TISON 2">TISON 2</option>
                <option value="TISONA M2">TISONA M2</option>
                <option value="HP PLUTEK 1">HP PLUTEK 1</option>
                <option value="HP PLUTEK 2">HP PLUTEK 2</option>
                <option value="HP LITHON 2">HP LITHON 2</option>
                <option value="HP LITHON 3">HP LITHON 3</option>
                <option value="HP LITHON M2">HP LITHON M2</option>
                <option value="AP3 ( All Purposes )">AP3 ( All Purposes )</option>
                <option value="MP3 ( Multi Purpose )">MP3 ( Multi Purpose )</option>
                <option value="HYTAK ( Open Gear Greases )">HYTAK ( Open Gear Greases )</option>
                <option value="HYLUBE HDX MULTIGRADE 20W40">HYLUBE HDX MULTIGRADE 20W40</option>
                <option value="HYLUBE HDX MULTIGRADE 20W50">HYLUBE HDX MULTIGRADE 20W50</option>
                <option value="HP MILCY POWER 15W40">HP MILCY POWER 15W40</option>
                <option value="HP RACER 4">HP RACER 4</option>
                <option value="HYLUBE X3 10W">HYLUBE X3 10W</option>
                <option value="HYLUBE X3 30">HYLUBE X3 30</option>
                <option value="HYLUBE X3 40">HYLUBE X3 40</option>
                <option value="HYLUBE X3 50">HYLUBE X3 50</option>
                <option value="HP NATURAL GAS ENGINE OIL L 40">HP NATURAL GAS ENGINE OIL L 40</option>
                <option value="HP NATURAL GAS ENGINE OIL L15W 40">HP NATURAL GAS ENGINE OIL L15W 40</option>
                <option value="HP NATURAL GAS ENGINE OIL A 40">HP NATURAL GAS ENGINE OIL A 40</option>
                <option value="HP ROLMET N34">HP ROLMET N34</option>
                <option value="HP ROLMET 40">HP ROLMET 40</option>
                <option value="HP METAQUENCH 39">HP METAQUENCH 39</option>
                <option value="HP METAQUENCH 40">HP METAQUENCH 40</option>
                <option value="HP METAQUENCH 42">HP METAQUENCH 42</option>
                <option value="HP METAQUENCH 43">HP METAQUENCH 43</option>
                <option value="HP METAQUENCH 44">HP METAQUENCH 44</option>
                <option value="HP KOOLKUT 40">HP KOOLKUT 40</option>
                <option value="HP KOOLKUT 70">HP KOOLKUT 70</option>
                <option value="HP KOOLKUT 80">HP KOOLKUT 80</option>
                <option value="HP TRIMOFIN 20">HP TRIMOFIN 20</option>
                <option value="HP TRIMOFIN 21">HP TRIMOFIN 21</option>
                <option value="HP TRIMOFIN 23">HP TRIMOFIN 23</option>
                <option value="HP TRIMOFIN 54">HP TRIMOFIN 54</option>
                <option value="HP TRIMOFIN 55">HP TRIMOFIN 55</option>
                <option value="HP TRIMOFIN 56">HP TRIMOFIN 56</option>
                <option value="HP RUSTOP 173">HP RUSTOP 173</option>
                <option value="HP RUSTOP 184">HP RUSTOP 184</option>
                <option value="HP RUSTOP 274">HP RUSTOP 274</option>
                <option value="HP RUSTOP 276">HP RUSTOP 276</option>
                <option value="HP RUSTOP 285">HP RUSTOP 285</option>
                <option value="HP RUSTOP 286">HP RUSTOP 286</option>
                <option value="HP RUSTOP 287">HP RUSTOP 287</option>
                <option value="HP RUSTOP S">HP RUSTOP S</option>
                <option value="HP DRAWMET 15">HP DRAWMET 15</option>
                <option value="HP DRAWMET 15S">HP DRAWMET 15S</option>
                <option value="HP DRAWMET 22">HP DRAWMET 22</option>
                <option value="HP HYTHERM 500">HP HYTHERM 500</option>
                <option value="HP HYTHERM 600">HP HYTHERM 600</option>
                <option value="HP Trasformer Oil">HP Trasformer Oil</option>
                <option value="HP ELASTO 165">HP ELASTO 165</option>
                <option value="HP ELASTO 245">HP ELASTO 245</option>
                <option value="HP ELASTO 255">HP ELASTO 255</option>
                <option value="HP ELASTO 541">HP ELASTO 541</option>
                <option value="HP ELASTO 590">HP ELASTO 590</option>
                <option value="HP ELASTO 710">HP ELASTO 710</option>
                <option value="HP ELASTO 715">HP ELASTO 715</option>
                <option value="HP HYTHERM 600">HP HYTHERM 600</option>
                <option value="HP SN 150">HP SN 150</option>
                <option value="HP SN 500">HP SN 500</option>
                <option value="YANTROL TS 32">YANTROL TS 32</option>
                <option value="YANTROL TS 68">YANTROL TS 68</option>
                <option value="YANTROL TS 100">YANTROL TS 100</option>
                <option value="YANTROL TS 220">YANTROL TS 220</option>
                <option value="YANTROL C 32">YANTROL C 32</option>
                <option value="STANTROL 1">STANTROL 1</option>
                <option value="STANTROL 3">STANTROL 3</option>
                <option value="SPINTEK 5">SPINTEK 5</option>
                <option value="SPINTEK 12">SPINTEK 12</option>
                <option value="SPINTEK 15">SPINTEK 15</option>
                <option value="SPINTEK 22">SPINTEK 22</option>
                <option value="Other">Other</option>
              </select>

              <label htmlFor="quantity">Quantity</label>
              <select
                name="Quantity"
                id="quantity"
                style={{
                  width: '100%',
                  padding: '5px',
                  fontSize: '14px',
                  border: '1px solid rgba(128, 128, 128, 0.199)',
                  marginTop: '5px',
                }}
              >
                <option value="">Quantity</option>
                {Array.from({ length: 50 }, (_, i) => (
                  <option key={i} value={String(i + 1).padStart(2, '0')}>
                    {String(i + 1).padStart(2, '0')}
                  </option>
                ))}
              </select>

              <label htmlFor="address">Address</label>
              <textarea name="address" id="address" cols="30" rows="5" />

              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" cols="30" rows="5" />

              <button type="submit" className="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="footer">
        <p style={{ textAlign: 'center', padding: '20px' }}>
          <span>&copy;</span> 2025 Vikas Automobiles. All rights reserved.
          <br />
          Customer Care : 9827003016
        </p>
        <div className="buttons">
          <img src="images/download.jpg" alt="HP Lubricants" />
          <h2 style={{ textAlign: 'center', padding: '20px', fontWeight: 'bold' }}>
            Follow us on Social Media
          </h2>

          <button>
            <a href="tel:+91-98270-03016">
              <img src="images/call.png" height="50px" width="50px" />
            </a>
          </button>
          <button>
            <a href="mailto:hpclcfasatna@gmail.com" target="_blank" rel="noreferrer">
              <img src="images/mail.png" height="50px" width="50px" />
            </a>
          </button>
          <button>
            <a href="https://twitter.com/cfa_hp_satna" target="_blank" rel="noreferrer">
              <img src="images/twitter.png" height="50px" width="60px" />
            </a>
          </button>
          <button>
            <a href="https://wa.me/919827003016" target="_blank" rel="noreferrer">
              <img src="images/whatsapp.png" height="50px" width="50px" />
            </a>
          </button>
          <button>
            <a href="https://www.instagram.com/hpclcfasatna/" target="_blank" rel="noreferrer">
              <img src="images/instagram.webp" alt="Instagram" width="50px" height="50px" />
            </a>
          </button>
        </div>
      </div> */}
    </>
  )
}
