# JSON Schema for JSON Shareable Playlist Format (JSPF)

JSPF is a JSON adaptation of XSPF, an XML based standard file format for sharing playlists. The basic JSON format is detailed here http://xspf.xiph.org/jspf/, but the structure of the JSON was not formalized when it was created because JSON Schema did not exist at the time. This repository is for developing a JSON Schema which validates the current JSPF format and as many of the concepts from the original XSPF format as possible. That specification can be found here http://xspf.xiph.org/orig-xspf-v1.html. Where there are differences between the spec and the default fomrats outlines for JSON Schema, I've prioritized keeping to the JSON Schema formats, since those will offer the path of least resistance to anyone looking to leverage JSPF in an actual application.

See jspf-schema.json for current Schema. It does not currently have an ID because atm it's a work in progress. If you have any suggestions or improvements feel free to submit a pull request.