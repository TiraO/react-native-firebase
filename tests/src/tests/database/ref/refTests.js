function refTests({ describe, it, firebase }) {
  describe('ref().ref', () => {
    it('returns the reference itself', () => {
      // Setup

      const ref = firebase.native.database().ref();

      // Assertion

      ref.ref.should.eql(ref);
    });
  });
}

export default refTests;
