import { useState, useEffect } from 'react';
import { AlertCircle, Download, ExternalLink } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const ReleaseInfo = () => {
  const [githubReleases, setGithubReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubReleases = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/Belligerently/SpecMatrix/releases');
        if (!response.ok) throw new Error('Failed to fetch GitHub releases');
        const data = await response.json();
        setGithubReleases(data);
      } catch (err) {
        setError('Unable to load GitHub releases');
      } finally {
        setLoading(false);
      }
    };

    fetchGithubReleases();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* App Store Section */}
      <div className="rounded-lg border p-6 bg-card">
        <h2 className="text-2xl font-bold mb-4">App Store Release</h2>
        <div className="space-y-4">
          <a 
            href="https://apps.apple.com/us/app/specmatrix/id6740110428"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-600"
          >
            <ExternalLink className="w-5 h-5" />
            Download from App Store
          </a>
        </div>
      </div>

      {/* GitHub Releases Section */}
      <div className="rounded-lg border p-6 bg-card">
        <h2 className="text-2xl font-bold mb-4">GitHub Releases</h2>
        
        {error ? (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : githubReleases.length === 0 ? (
          <p className="text-gray-500">No releases available</p>
        ) : (
          <div className="space-y-4">
            {githubReleases.map((release) => (
              <div key={release.id} className="border-t pt-4 first:border-t-0 first:pt-0">
                <h3 className="text-lg font-semibold mb-2">
                  {release.name || release.tag_name}
                </h3>
                <p className="text-gray-500 mb-3">
                  Released on {new Date(release.published_at).toLocaleDateString()}
                </p>
                {release.assets.map((asset) => (
                  <a
                    key={asset.id}
                    href={asset.browser_download_url}
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-600"
                  >
                    <Download className="w-5 h-5" />
                    Download {asset.name} ({(asset.size / 1024 / 1024).toFixed(2)} MB)
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Side Loading Instructions */}
      <div className="rounded-lg border p-6 bg-card">
        <h2 className="text-2xl font-bold mb-4">Sideloading Instructions</h2>
        <p className="mb-4">To sideload the IPA, you can use one of these tools:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="https://altstore.io" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
              AltStore
            </a>
          </li>
          <li>
            <a href="https://sidestore.io" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
              SideStore
            </a>
          </li>
          <li>
            <a href="https://github.com/khcrysalis/Feather" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
              FeatherSign
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReleaseInfo;
